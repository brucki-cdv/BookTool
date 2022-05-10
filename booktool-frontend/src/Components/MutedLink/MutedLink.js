import "./MutedLink.css";

export default function MutedLink(props) {
  return (
    <div className="muted-link">
      <a href={props.href}>{props.children}</a>
    </div>
  );
}
