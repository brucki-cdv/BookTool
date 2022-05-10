import "./Input.css";

export default function Input(props) {
  return (
    <div>
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
}
