import axios from "axios";

export default {
  init: axiosInstance => {
    axiosInstance.interceptors.request.use(
      request => {
        // modify request ...
        console.log("Request Intercepted: ", request.url);
        return request;
      },
      error => {
        console.log("Request Intercepted, ERROR: ", error);
        return Promise.reject(error);
      }
    );

    axiosInstance.interceptors.response.use(
      response => {
        // modify request ...
        console.log("Response Intercepted!");
        return response;
      },
      error => {
        console.log("Response Intercepted: ERROR!");
        return Promise.reject(error);
      }
    );
  }
};
