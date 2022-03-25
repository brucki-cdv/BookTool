import "./HomeContent.css";
import Container from "../../Components/Container";
import { Routes, Route, Outlet } from "react-router-dom";

const HomeContent = (props) => {
  return (
    <Container className="home-content">
      <Outlet />
    </Container>
  );
};

export default HomeContent;
