import { useState } from "react";
import Button from "../UI/Button";
import style from "./Navbar.module.css";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className={style.navbar}>
      <h1 className={style.title}>Shortly</h1>
      <ul className={style.links}>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Resources</a>
        </li>
      </ul>
      <div className={style.wideScreenButtons}>
        <button className={style.button}>Login</button>
        <Button value={"Sign Up"} />
      </div>

      <button
        className={style.menu}
        onClick={() => setOpenMenu((prevState) => !prevState)}
      >
        <i className="fa-solid fa-bars"></i>
      </button>
      {openMenu && (
        <ul
          className={style.navigationMenu}
          onClick={() => setOpenMenu((prevState) => !prevState)}
        >
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <button className={style.button}>Login</button>
          <Button value={"Sign Up"} />
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
