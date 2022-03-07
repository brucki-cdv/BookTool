import axios from "axios";
const API_URL = "http://localhost:8000/api/v1/user/";
const register = (firstName, lastName, email, password) => {
  return axios.post(API_URL + "rejestracja", {
    firstName,
    lastName,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      console.log(response);
      if (response.data.jwt.token) {
        localStorage.setItem("user", JSON.stringify(response.data.jwt));
      }
      return response.data;
    });
};
const logout = () => {
  localStorage.removeItem("user");
};
export default {
  register,
  login,
  logout,
};
