import "./SquareCardDetails.css";

export default function SquareCardDetails({children}) {
    return (
        <ul className="square-card__details">
            {children}
        </ul>
    )
}