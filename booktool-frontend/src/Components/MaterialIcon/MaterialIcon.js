import "./MaterialIcon.css";
import classnames from "classnames";

const MaterialIcon = ({ className, name }) => {
  return <i className={classnames("material-icons", className)}>{name}</i>;
};

export default MaterialIcon;
