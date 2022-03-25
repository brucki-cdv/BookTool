import "./SearchBar.css";
import MaterialIcon from "../MaterialIcon/MaterialIcon";
import Container from "../Container";
const SearchBar = (props) => {
  const style = props.lightMode
    ? "header__search-bar light"
    : "header__search-bar";

  return (
    <Container className={style}>
      <li>
        <Container className="icon-container">
          <MaterialIcon name="search" />
        </Container>
        <input
          type="text"
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      </li>
    </Container>
  );
};

export default SearchBar;
