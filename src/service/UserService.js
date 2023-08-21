import { baseUrl, callApi } from "./apiConfig";

export const loginApi = (loginData, localToken) => {
  return callApi("POST", baseUrl + "/auth/signin", loginData, localToken);
};
export const signUpApi = (data) => {
  return callApi("POST", baseUrl + "/auth/signup", data);
};
export const checkTokenApi = (localToken) => {
  return callApi("POST", baseUrl + "auth/checkTokenApi", null, localToken);
};
export const getUnapprovedUserAPI = (data) => {
  return callApi("GET", baseUrl + "/browseruser/getUnapprovedList", data);
};
export const allowAccessUserAPI = (data) => {
  return callApi("PUT", baseUrl + "/browseruser/allowOneUser", data);
};
export const denyAccessUserAPI = (data) => {
  return callApi("PUT", baseUrl + "/browseruser/denyuser", data);
};
export const allAcceptUserAPI = (data) => {
  return callApi("PUT", baseUrl + "/browseruser/allowAllUser", data);
};
export const searchUserAPI = (data) => {
  return callApi("GET", baseUrl + "/browseruser/searchUser", data);
};
export const getApprovedUserAPI = (data) => {
  return callApi("GET", baseUrl + "/browseruser/getApprovedList", data);
};
export const lockUserAccount = (data) => {
  return callApi("PUT", baseUrl + "/browseruser/lockuser", data);
};
export const unlockUserAccount = (data) => {
  return callApi("PUT", baseUrl + "/browseruser/unlockuser", data);
};
