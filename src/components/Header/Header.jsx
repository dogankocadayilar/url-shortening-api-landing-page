import Button from "../UI/Button";
import style from "./Header.module.css";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className={style.header}>
      <Navbar />
      <div className={style.content}>
        <img
          src="https://raw.githubusercontent.com/dogankocadayilar/url-shortening-api-landing-page/main/src/assets/images/illustration-working.svg"
          alt=""
          className={style.headerImg}
        />
        <div className={style.info}>
          <h2 className={style.title}> More than just shorter links</h2>
          <p className={style.desc}>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <Button value={"Get Started"} />
        </div>
      </div>
    </header>
  );
}

export default Header;
