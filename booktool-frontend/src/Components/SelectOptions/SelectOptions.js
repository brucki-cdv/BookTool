import "./SelectOptions.css";

const SelectOptions = (props) => {
  let options = props.options;

  return (
    <div className="select-options">
      <label for={props.id}>{props.label}</label>
      <select name={props.name} id={props.id} onChange={props.onChange} value={props.value}>
        {options.map((val) => {
          return <option value={val.value} >{val.name}</option>;
        })}
      </select>
    </div>
  );
};

export default SelectOptions;