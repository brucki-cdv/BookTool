import "./Login.css";
import MainContainer from "../../Components/MainContainer/MainContainer";
import ContentWrapper from "../../Components/ContentWrapper/ContentWrapper";
import LoginContent from "./LoginContent";
import WrapperCover from "../../Components/WrapperCover/WrapperCover";

const Login = (props) => {
  return (
    <MainContainer>
      <div className="center-div">
        <ContentWrapper>
          <LoginContent />
          <WrapperCover />
        </ContentWrapper>
      </div>
    </MainContainer>
  );
};

export default Login;
