"use server";

import baseApi from "@/baseApi";

export const getRepoData = async (url) => {
  const link = url.split("://")[1].split('/')

	console.log(link)

  try {
    const content = await baseApi.get(
      `https://api.github.com/repos/${link[1]}/${link[2]}`
    );

    return content;
  } catch (e) {
    return e;
  }
};
