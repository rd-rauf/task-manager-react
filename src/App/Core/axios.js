import axios from "axios";
import axiosConfig from "./axiosConfig";

const instance = axios.create({
  baseURL: "http://localhost:3031/api"
});

let userAuthInfo = localStorage.getItem("userInfo");
if (userAuthInfo) {
  userAuthInfo = JSON.parse(userAuthInfo);
  if (userAuthInfo.userAuthToken) {
    instance.defaults.headers.common["Authorization"] = "Bearer " + userAuthInfo.userAuthToken;
  }
}
instance.defaults.headers.post["Content-Type"] = "application/json";

axiosConfig.init(instance);

export default instance;
