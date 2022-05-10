import axios from "axios";
const API_URL = "http://localhost:8000/api/v1/user/";
const register = (firstName, lastName, email, password, passwordConfirm) => {
  return axios.post(API_URL + "register", {
    firstName,
    lastName,
    email,
    password,
    passwordConfirm,
  });
};

const login = (email, password) => {
  return axios
    .post(
      API_URL + "login",
      {
        email: email,
        password: password,
      },
      { withCredentials: true }
    )
    .then((response) => {
      console.log(response);
    });
};

const logout = () => {
  return axios.get(API_URL + "logout");
};

const getUser = () => {
  return axios.get(API_URL, {
    withCredentials: true,
  });
};

export default {
  register,
  login,
  logout,
  getUser,
};
