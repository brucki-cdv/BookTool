import "./MessagesWrapper.css";

const MessagesWrapper = (props) => {
  return (
    <div className="messages__wrapper">
      <ul>{props.children}</ul>
    </div>
  );
};

export default MessagesWrapper;
