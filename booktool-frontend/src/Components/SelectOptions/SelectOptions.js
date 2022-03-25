import "./SelectOptions.css";
import classnames from "classnames";

const SelectOptions = ({options, ...props}) => {

  return (
    <div className={classnames(props.className, "select-options")}>
      <label for={props.id}>{props.label}</label>
      <select
        name={props.name}
        id={props.id}
        onChange={props.onChange}
        value={props.value}
      >
        {options.map((val) => {
          return <option value={val}>{val}</option>;
        })}
      </select>
    </div>
  );
};

export default SelectOptions;
