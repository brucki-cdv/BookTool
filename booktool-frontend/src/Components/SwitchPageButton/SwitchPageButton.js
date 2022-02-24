import "./SwitchPageButton.css";
import MaterialIcon from "../MaterialIcon/MaterialIcon";
const SwitchPageButton = (props) => {
  return (
    <div className="switch-page">
      <ul>
        <li>
          <span className="switch-page__button">
            <MaterialIcon name="chevron_left" />
          </span>
        </li>
        <li>
          <span className="switch-page__button">
            <MaterialIcon name="chevron_right" />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default SwitchPageButton;
