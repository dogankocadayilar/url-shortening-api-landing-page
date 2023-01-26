import style from "./Button.module.css";

function Button({ value, classList }) {
  return <button className={style.button}>{value}</button>;
}
export default Button;
