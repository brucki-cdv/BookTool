import "./FormContainer.css";

const FormContainer = (props) => {
    return (
        <form className="form-container" onSubmit={props.onSubmit}>
            {props.children}
        </form>
    )
}

export default FormContainer;