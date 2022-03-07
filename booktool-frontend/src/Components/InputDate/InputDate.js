import "./InputDate.css";

const InputDate = (props) => {
  return (
    <div className="input-date">
      <label for={props.id}>{props.label}</label>
      <input
        id={props.id}
        type="date"
        value={props.value}
        onChange={props.onChange}
        min={props.min}
        max={props.max}
      />
    </div>
  );
};

export default InputDate;
