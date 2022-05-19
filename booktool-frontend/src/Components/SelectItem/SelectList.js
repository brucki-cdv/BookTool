import style from "./SelectList.module.css";

export default function SelectList(props) {
  return <ul className={style.selectList}>{props.children}</ul>;
}
