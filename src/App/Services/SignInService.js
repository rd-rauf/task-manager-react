import axiosInstance from "../Core/axios";

function signIn(email, password) {
  return axiosInstance
    .post("/users/signin", {
      email: email,
      password: password
    })
    .then(response => {
      const data = response.data;
      if (data && data.status === "success") {
        return data.data;
      } else {
        return undefined;
      }
    });
}

export default {
  signIn: signIn
};
