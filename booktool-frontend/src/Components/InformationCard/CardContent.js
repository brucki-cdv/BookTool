import "./CardContent.css";

export default function CardContent(props) {
  return (
    <div className="information-card__content">
      <span className="card-content__title">{props.title}</span>
      <span className="card-content__number">{props.value}</span>
    </div>
  );
}
