import "./InputNumber.css";

const InputNumber = (props) => {
  return (
    <div className="input-number">
      <label for={props.id}>{props.label}</label>
      <input for={props.id} type="number" />
    </div>
  );
};

export default InputNumber;
