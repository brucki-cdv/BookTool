import "./MaterialIcon.css";

const MaterialIcon = (props) => {
  return (
    <div className="icon-container">
      <i className="material-icons">{props.name}</i>
    </div>
  );
};

export default MaterialIcon;
