import "./LoginContent.css";
import InputField from "../../Components/InputField/InputField";
import FormTitle from "../../Components/FormTitle/FormTitle";
import FormContainer from "../../Components/FormContainer/FormContainer";
import FormErrorMessage from "../../Components/FormErrorMessage/FormErrorMessage";
import SubmitButton from "../../Components/SubmitButton/SubmitButton";
import MutedLink from "../../Components/MutedLink/MutedLink";

import { useState, useEffect } from "react";
import {
  checkIfEmailIsValid,
  checkIfPasswordIsValid,
} from "../../Services/login-validation";
import { useNavigate } from "react-router-dom";

const LoginContent = (props) => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [errorMessage, setErrorMessage] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const emailInputChangeHandler = (event) => {
    setEmailInput(event.target.value);
  };

  const passwordInputChangeHandler = (event) => {
    setPasswordInput(event.target.value);
  };

  const formHandler = (e) => {
    setErrorMessage((prevState) => {
      return {
        ...prevState,
        email: checkIfEmailIsValid(emailInput),
      };
    });

    setErrorMessage((prevState) => {
      return {
        ...prevState,
        password: checkIfPasswordIsValid(passwordInput),
      };
    });

    if (
      errorMessage.email === undefined &&
      errorMessage.password === undefined
    ) {
      navigate("/dashboard");
    }

    console.log("EMAIL INPUT = ", emailInput);
    console.log("PASSWORD INPUT = ", passwordInput);
    console.log("EMAIL ERROR = ", errorMessage.email);
    console.log("PASSWORD ERROR = ", errorMessage.password);

    e.preventDefault();
  };

  useEffect(() => {
    setErrorMessage((prevState) => {
      return {
        ...prevState,
        email: checkIfEmailIsValid(emailInput),
      };
    });

    setErrorMessage((prevState) => {
      return {
        ...prevState,
        password: checkIfPasswordIsValid(passwordInput),
      };
    });
  }, []);

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
          onChange={emailInputChangeHandler}
        />
        {errorMessage.email && (
          <FormErrorMessage message={errorMessage.email} />
        )}
        <InputField
          type="password"
          name="password"
          label="Hasło"
          icon="lock"
          placeholder="Podaj hasło"
          inputRef={passwordInput}
          onChange={passwordInputChangeHandler}
        />
        {errorMessage.password && (
          <FormErrorMessage message={errorMessage.password} />
        )}
        <SubmitButton value="Zaloguj się!" />
        <MutedLink text="Nie masz konta? Zarejestruj się!" />
      </FormContainer>
    </div>
  );
};

export default LoginContent;
