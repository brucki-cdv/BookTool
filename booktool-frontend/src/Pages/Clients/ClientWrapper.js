import "./ClientWrapper.css";

const ClientWrapper = (props) => {
    return (
        <div className="client-container">
            {props.children}
        </div>
    )
}

export default ClientWrapper;