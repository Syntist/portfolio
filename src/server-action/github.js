"use server";

import baseApi from "@/baseApi";

export const getRepoData = async (url) => {
  const link = url?.split("://")[1].split('/')

  try {
    const content = await baseApi.get(
      `https://api.github.com/repos/${link[1]}/${link[2]}`
    );

    return content.data;
  } catch (e) {
    return e;
  }
};

export const getRepoReadme = async (url) => {
  const link = url?.split("://")[1].split('/')

  try {

    const content = await baseApi.get(
      `https://api.github.com/repos/${link[1]}/${link[2]}/contents/README.md`
    );

    const readme = Buffer.from(content.data.content, 'base64').toString('utf-8')

    return readme;
  } catch (e) {
    return e;
  }
};
