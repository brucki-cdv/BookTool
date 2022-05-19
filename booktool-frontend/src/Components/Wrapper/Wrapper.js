import "./Wrapper.css";
import classnames from "classnames";

export default function Wrapper({ className, children }) {
  return <div className={classnames(className, "wrapper")}>{children}</div>;
}
