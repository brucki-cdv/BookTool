import "./SubmitButton.css";

export default function SubmitButton(props) {
  return (
    <div className="submit-button">
      <input type="submit" name={props.name} value={props.value} />
    </div>
  );
}
