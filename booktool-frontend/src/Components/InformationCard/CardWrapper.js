import "./CardWrapper.css";

const CardWrapper = (props) => {
    return (
        <div className="home__information-card">
            {props.children}
        </div>
    )
}

export default CardWrapper;