import "./InputDate.css";

const InputDate = (props) => {
  return (
    <div className="input-date">
      <label for={props.id}>{props.label}</label>
      <input id={props.id} type="date" />
    </div>
  );
};

export default InputDate;
