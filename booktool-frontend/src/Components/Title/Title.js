import "./Title.css";

const Title = ({ name }) => {
  return (
    <div className="title">
      <span>{name}</span>
    </div>
  );
};

export default Title;
