import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import authService from "../Services/auth.service";

export default function useAuth() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const setUser = async () => {
    return await authService
      .getUser()
      .then((res) => {
        dispatch({ type: "SET_USER", payload: res.data.currentUser });
        navigate("/dashboard");
      })
      .catch((err) => {
        setError(err.response.data);
      });
  };

  const registerUser = async (data) => {
    const { firstName, lastName, email, password, passwordConfirm } = data;
    return authService
      .register(firstName, lastName, email, password, passwordConfirm)
      .catch((err) => {
        setError(err.response.data);
      });
  };

  const loginUser = async (email, password) => {
    return authService
      .login(email, password)
      .then(async (val) => {
        console.log(val);
        await setUser();
      })
      .catch((err) => {
        setError(err.response.data);
      });
  };

  return {
    registerUser,
    loginUser,
    error,
  };
}
