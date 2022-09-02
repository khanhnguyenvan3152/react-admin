import axios from "axios";
import { token } from "./tokenService";
const baseURL = process.env.REACT_APP_REMOTE_SERVICE_BASE_URL;
export const axiosInstance = axios.create({
  baseURL: baseURL,
});
axiosInstance.interceptors.request.use(
  function (config) {
    config = {
      ...config,
      headers: {
        Authorization: token,
      },
    };
    return config;
  },
  function (error) {
    return;
  }
);

axiosInstance.interceptors.response.use(function (response) {
  if (response.status === 404) {
    console.log(response.data.error);
  }
  return response;
});
