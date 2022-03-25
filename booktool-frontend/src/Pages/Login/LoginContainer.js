import { useState, useEffect, useMemo, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Actions/auth";
import LoginContent from "./LoginContent";

const LoginContainer = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [formIsValid, setFormIsValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const hello = () => {
    console.log("hello");
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    console.log(email);
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const formValidation = () => {
    setFormIsValid(true);
    setError({});

    if (email.length < 8) {
      setFormIsValid(false);
      setError((prevState) => {
        return { ...prevState, email: "Email is not valid" };
      });
    }

    if (password.length < 8) {
      console.log("password lenght");

      setFormIsValid(false);
      setError((prevState) => {
        return { ...prevState, password: "Password is not valid" };
      });
    }

    if (!email) {
      console.log("email empy");

      setFormIsValid(false);
      setError((prevState) => {
        return { ...prevState, email: "Can not be empty" };
      });
    }

    if (!password) {
      setFormIsValid(false);
      console.log("password emp");

      setError((prevState) => {
        return { ...prevState, password: "Can not be empty" };
      });
    }
  };

  const formHandler = (e) => {
    console.log("hello");
    e.preventDefault();
    setLoading(true);
    formValidation();
    if (formIsValid) {
      dispatch(login(email, password)).then((e) => console.log(e));
    }
  };

  if (isLoggedIn) {
    navigate("/dashboard");
    console.log("navigate!");
  }

  const loginContext = useMemo(() => ({
    onChangeEmail,
    onChangePassword,
    formValidation,
    formHandler,
    hello,
    error,
    formIsValid,
  }));

  return <LoginContent {...loginContext} />;
};

export default LoginContainer;
