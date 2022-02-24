import "./SubmitButton.css";

const SubmitButton = (props) => {
    return (
        <div className="submit-button">
        <input type="submit" name={props.name} value={props.value} />
        </div>
    )
}

export default SubmitButton;