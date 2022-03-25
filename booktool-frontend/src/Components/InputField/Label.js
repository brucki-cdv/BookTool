import classnames from "classnames";

const Label = ({ className, id, label }) => {
  return (
    <label for={id} className={classnames(className)}>
      {label}
    </label>
  );
};

export default Label;
