import './FormTitle.css';

const FormTitle = (props) => {
    return (
        <div className="form-title">
            <span>{props.name}</span>
        </div>
    )
}

export default FormTitle;