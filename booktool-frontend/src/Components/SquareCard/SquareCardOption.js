import "./SquareCardOption.css";

export default function SquareCardOption({children, onClick}) {
    return (
        <div className="square-card__option" onClick={onClick}>{children}</div>
    )
}