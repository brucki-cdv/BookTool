import "./Searchbar.css";
import MaterialIcon from "../MaterialIcon/MaterialIcon";

export default function Searchbar(props) {
  const style = props.lightMode
    ? "header__search-bar light"
    : "header__search-bar";

  return (
    <div className={style}>
      <li>
        <div className="icon-container">
          <MaterialIcon name="search" />
        </div>
        <input
          type="text"
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      </li>
    </div>
  );
}
