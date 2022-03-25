import "./LoginContent.css";
import InputField from "../../Components/InputField";
import Title from "../../Components/Title";
import FormContainer from "../../Components/FormContainer";
import ErrorFormMessage from "../../Components/ErrorFormMessage";
import SubmitButton from "../../Components/SubmitButton";
import MutedLink from "../../Components/MutedLink";

const LoginContent = ({
  formHandler,
  formIsValid,
  onChangeEmail,
  onChangePassword,
  error,

}) => {
  return (
    <div className="login-content">
      <Title name="Zaloguj się!" />
      <FormContainer onSubmit={formHandler}>
        <InputField
          type="text"
          name="email"
          label="Email"
          icon="mail"
          placeholder="Podaj email"
          onChange={onChangeEmail}
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
