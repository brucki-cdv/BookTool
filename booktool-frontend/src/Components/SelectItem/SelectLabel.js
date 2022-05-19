import style from "./SelectLabel.module.css";

export default function SelectLabel(props) {
  return <span className={style.selectLabel}>{props.children}</span>;
}
