import axios from "./customAxios";

export const baseUrl = process.env.REACT_APP_API_BASE_URL;
export const callApi = (method, url, data, localToken) => {
  return axios({
    baseURL: baseUrl,
    method,
    url,
    data,
    headers: {
      Authorization: localToken,
    },
  });
};
