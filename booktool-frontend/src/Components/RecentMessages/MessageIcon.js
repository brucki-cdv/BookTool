import Container from "../Container";
import MaterialIcon from "../MaterialIcon";
import "./MessageIcon.css";
const MessageIcon = (props) => {

  const getStatusIcon = () => {
    switch (props.type) {
      case "added":
        return "add";
      case "cancelled":
        return "close";
      case "date":
        return "schedule";
    }
  };

  return (
    <Container className="icon-container">
      <MaterialIcon name={getStatusIcon()} />
    </Container>
  );
};

export default MessageIcon;
