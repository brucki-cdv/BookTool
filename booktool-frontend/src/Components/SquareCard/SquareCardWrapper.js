import "./SquareCardWrapper.css";

export default function SquareCardWrapper({children}) {
    return (
        <div className="square-card__wrapper">
            {children}
        </div>
    )
}