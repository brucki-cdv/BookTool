import "./DetailsContainer.css";

const DetailsContainer = (props) => {
    return (
        <div className="home__details-container">
            {props.children}
        </div>
    )
}

export default DetailsContainer;