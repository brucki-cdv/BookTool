import style from "./SelectContainer.module.css";

export default function SelectContainer(props) {
  return <div className={style.selectContainer}>{props.children}</div>;
}
