import "./Login.css";
import MainContainer from "../../Components/MainContainer";
import Wrapper from "../../Components/Wrapper";
import LoginContainer from "./LoginContainer";
import WrapperCover from "../../Components/WrapperCover";
import Container from "../../Components/Container";


const Login = (props) => {
  return (
    <MainContainer>
      <Container className="center-div">
        <Wrapper>
          <LoginContainer/>
          <WrapperCover />
        </Wrapper>
      </Container>
    </MainContainer>
  );
};

export default Login;
