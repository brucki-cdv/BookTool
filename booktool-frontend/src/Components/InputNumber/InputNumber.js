import "./InputNumber.css";

export default function InputNumber(props) {
  return (
    <div className="input-number">
      <label for={props.id}>{props.label}</label>
      <input
        for={props.id}
        type="number"
        value={props.value}
        onChange={props.onChange}
        min={props.min}
      />
    </div>
  );
}
