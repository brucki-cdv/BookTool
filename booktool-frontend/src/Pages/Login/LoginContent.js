import "./LoginContent.css";
import InputField from "../../Components/InputField/InputField";
import FormTitle from "../../Components/FormTitle/FormTitle";
import FormContainer from "../../Components/FormContainer/FormContainer";
import FormErrorMessage from "../../Components/FormErrorMessage/FormErrorMessage";
import SubmitButton from "../../Components/SubmitButton/SubmitButton";
import MutedLink from "../../Components/MutedLink/MutedLink";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Actions/auth";
import ErrorFormMessage from "../../Components/FormErrorMessage/FormErrorMessage";

const LoginContent = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [formIsValid, setFormIsValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeEmail = (e) => {
    const email = e.target.value;
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

  console.log(formIsValid);

  return (
    <div className="login-content">
      <FormTitle name="Zaloguj się!" />
      <FormContainer onSubmit={formHandler}>
        <InputField
          type="text"
          name="email"
          label="Email"
          icon="mail"
          placeholder="Podaj email"
          onChange={onChangeEmail}
          isValid={error.email ? false : true}
        />
        {!formIsValid && error.email && (
          <ErrorFormMessage message={error.email} />
        )}
        <InputField
          type="password"
          name="password"
          label="Hasło"
          icon="lock"
          placeholder="Podaj hasło"
          onChange={onChangePassword}
          isValid={error.password ? false : true}
        />
        {!formIsValid && error.password && (
          <ErrorFormMessage message={error.password} />
        )}
        <SubmitButton value="Zaloguj się!" />
        <MutedLink text="Nie masz konta? Zarejestruj się!" />
      </FormContainer>
    </div>
  );
};

export default LoginContent;
