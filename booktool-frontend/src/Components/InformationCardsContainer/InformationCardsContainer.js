import "./InformationCardsContainer.css";

const InformationCardsContainer = (props) => {
    return (
        <div className="information-cards-container">
            {props.children}
        </div>
    )
}

export default InformationCardsContainer;