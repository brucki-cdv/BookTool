import style from "./SelectHeader.module.css";

export default function SelectHeader(props) {
  return (
    <div className={style.selectHeader} onClick={props.onClick}>
      {props.children}
    </div>
  );
}
