import style from "./InfoCard.module.css";

function InfoCard({ url, title, desc }) {
  return (
    <div className={style.info}>
      <div className={style.image}>
        <img src={url} alt="Picture" />
      </div>
      <h2 className={style.title}>{title}</h2>
      <p className={style.desc}>{desc}</p>
    </div>
  );
}

export default InfoCard;
