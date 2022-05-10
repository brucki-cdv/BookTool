import "./MessagesWrapper.css";

export default function MessagesWrapper(props) {
  return (
    <div className="wrapper messages__wrapper">
      <ul>{props.children}</ul>
    </div>
  );
}
