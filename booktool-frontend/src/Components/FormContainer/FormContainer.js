import "./FormContainer.css";

export default function FormContainer(props) {
  return (
    <form className="form-container" onSubmit={props.onSubmit}>
      {props.children}
    </form>
  );
}
