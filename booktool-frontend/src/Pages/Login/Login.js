import "./Login.css";
import MainContainer from "../../Components/MainContainer";
import LoginWrapper from "./LoginWrapper";
import LoginContainer from "./LoginContainer";
import WrapperCover from "../../Components/WrapperCover";
import loginSvg from "../../Images/login-svg.svg";

const Login = (props) => {
  return (
    <MainContainer>
      <div className="center-div">
        <LoginWrapper>
          <LoginContainer />
          <WrapperCover>
            <div className="wrapper-cover__text">
              Odwiedź naszą stronę i dowiedz się więcej
              <button className="wrapper-cover__button">BOOKTOOL</button>
            </div>
            <img src={loginSvg} alt="book" height="650px" width="550px" />
          </WrapperCover>
        </LoginWrapper>
      </div>
    </MainContainer>
  );
};

export default Login;
