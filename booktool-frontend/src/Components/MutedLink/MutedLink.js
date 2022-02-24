import "./MutedLink.css";

const MutedLink = (props) => {
  return (
    <div className="muted-link">
      <a href={props.href}>{props.text}</a>
    </div>
  );
};

export default MutedLink;
