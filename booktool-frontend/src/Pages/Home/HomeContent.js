import "./HomeContent.css";
import { Outlet } from "react-router-dom";

const HomeContent = (props) => {
  return (
    <div className="home-content">
      <Outlet />
    </div>
  );
};

export default HomeContent;
