import classnames from "classnames";

const Container = ({className, children}) => {
  return <div className={classnames(className)}>{children}</div>;
};

export default Container;
