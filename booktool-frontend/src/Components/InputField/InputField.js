import "./InputField.css";


export default function InputField(props) {
  const errorClass = props.isValid ? "" : "error";
  return (
    <div className="input-field">
      <label for={props.id}>{props.label}</label>
      <input
        for={props.id}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        min={props.min}
      />
    </div>
  );
}
