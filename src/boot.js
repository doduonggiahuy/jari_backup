import { checkTokenApi } from "@src/service/UserService";

const boot = async () => {
  const localToken = localStorage.getItem("token");
  if (!localToken) {
    return false; // Not authenticated
  } else {
    try {
      const res = await checkTokenApi(localToken);
      if ([200].includes(res?.status)) {
        console.log("Valid token");
        return true; // Authenticated
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error while checking token:", error);
      return false;
    }
  }
};

export default boot;
