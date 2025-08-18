"use server";

import axios from "axios";

/**
 * Parses the GitHub URL and extracts the repository owner and name.
 * @param {string} url - The GitHub repository URL.
 * @returns {Object} - An object containing the owner and repo name.
 */
function parseGitHubUrl(url) {
  const parsedUrl = new URL(url);
  const pathSegments = parsedUrl.pathname.replace(/^\/|\/$/g, "").split("/");
  if (pathSegments.length >= 2) {
    const [owner, repo] = pathSegments;
    return { owner, repo };
  } else {
    throw new Error("Invalid GitHub URL provided!");
  }
}

/**
 * Fetches the content of a GitHub repository path.
 * @param {string} owner - Repository owner.
 * @param {string} repo - Repository name.
 * @param {string} path - Path within the repository.
 * @param {string} token - GitHub access token.
 * @returns {Promise<Object>} - The repository content data.
 */
async function fetchRepoContent(owner, repo, path = "", token = null) {
  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
  const headers = {
    Accept: "application/vnd.github.v3+json",
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    throw new Error(
      `Error fetching repository content: ${error.response.status} ${error.response.statusText}`
    );
  }
}

/**
 * Decodes the base64-encoded file content.
 * @param {Object} fileInfo - The file information object.
 * @returns {string} - The decoded file content.
 */
function getFileContent(fileInfo) {
  if (fileInfo.encoding === "base64") {
    return Buffer.from(fileInfo.content, "base64").toString("utf-8");
  } else {
    return fileInfo.content;
  }
}

/**
 * Builds a string representation of the directory tree and collects file paths.
 * @param {string} owner - Repository owner.
 * @param {string} repo - Repository name.
 * @param {string} path - Path within the repository.
 * @param {string} token - GitHub access token.
 * @param {number} indent - Indentation level for formatting.
 * @param {Array} filePaths - Accumulator for file paths.
 * @returns {Promise<string>} - The formatted directory tree string.
 */
async function buildDirectoryTree(
  owner,
  repo,
  path = "",
  token = null,
  indent = 0,
  filePaths = []
) {
  const items = await fetchRepoContent(owner, repo, path, token);
  let treeStr = "";

  for (const item of items) {
    if (item.path.includes(".github")) {
      continue;
    }
    if (item.type === "dir") {
      treeStr += "    ".repeat(indent) + `[${item.name}/]\n`;
      treeStr += await buildDirectoryTree(
        owner,
        repo,
        item.path,
        token,
        indent + 1,
        filePaths
      );
    } else {
      treeStr += "    ".repeat(indent) + `${item.name}\n`;
      if (item.name.match(/\.(py|html|css|js|jsx|rst|md)$/)) {
        filePaths.push({ indent, path: item.path });
      }
    }
  }
  return treeStr;
}

/**
 * Retrieves and formats repository information, including README, directory tree, and file contents.
 * @param {string} url - The GitHub repository URL.
 * @param {string} token - GitHub access token.
 * @returns {Promise<string>} - The formatted repository information.
 */
export async function retrieveGitHubRepoInfo(url) {
  const token = process.env.GITHUB_API;
  const { owner, repo } = parseGitHubUrl(url);

  let formattedString = `You are a coding expert who analyses GitHub repos. 
                         When replying, be succinct and polite. Avoid markdown title headers. 
                         When citing files or variables, use backticks for markdown formatting.
                         Base your answers on this repo:\n`;

  // Fetch README.md
  try {
    const readmeInfo = await fetchRepoContent(owner, repo, "README.md", token);
    const readmeContent = getFileContent(readmeInfo);
    formattedString += `README.md:\n\`\`\`\n${readmeContent}\n\`\`\`\n\n`;
  } catch (error) {
    formattedString += "README.md: Not found or error fetching README\n\n";
  }

  // Build Directory Structure
  let filePaths = [];
  const directoryTree = await buildDirectoryTree(
    owner,
    repo,
    "",
    token,
    0,
    filePaths
  );
  formattedString += `Directory Structure:\n${directoryTree}\n`;

  // Fetch contents of specified files
  for (const { indent, path } of filePaths) {
    try {
      const fileInfo = await fetchRepoContent(owner, repo, path, token);
      const fileContent = getFileContent(fileInfo);
      formattedString +=
        "\n" +
        "    ".repeat(indent) +
        `${path}:\n` +
        "    ".repeat(indent) +
        "```\n" +
        fileContent +
        "\n" +
        "    ".repeat(indent) +
        "```\n";
    } catch (error) {
      formattedString +=
        "\n" + "    ".repeat(indent) + `${path}: Error fetching file content\n`;
    }
  }

  return formattedString;
}
