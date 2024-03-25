import axios from "axios";

// Create an Axios instance with a base URL
const baseApi = axios.create({});

baseApi.interceptors.request.use(
  function (config) {
    config.headers["Accept"] = "application/vnd.github+json";
    config.headers["X-GitHub-Api-Version"] = "2022-11-28";
    config.headers["Authorization"] = `Bearer ${GITHUB_API}`;

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

baseApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default baseApi;
