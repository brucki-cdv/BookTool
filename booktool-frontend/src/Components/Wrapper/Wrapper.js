import "./Wrapper.css";
import classnames from "classnames";

const Wrapper = ({ className, children }) => {
  return <div className={classnames(className, "wrapper")}>{children}</div>;
};

export default Wrapper;
