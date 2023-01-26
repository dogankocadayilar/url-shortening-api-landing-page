import { useReducer, useState } from "react";
import useFetch from "../../hooks/useFetch";
import style from "./Shorter.module.css";

function createShorted({ full_short_link, original_link }) {
  return {
    full: original_link,
    short: full_short_link,
  };
}

function Shorter({ setShortedList }) {
  const [url, setUrl] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (url === "") {
      setIsEmpty(true);
      return;
    }

    setIsEmpty(false);

    const [shorted] = await useFetch(url);

    if (shorted.ok) {
      const link = createShorted(shorted.result);
      setShortedList((prevState) => {
        if (prevState.find((item) => item.full === link.full)) {
          return prevState;
        } else {
          return [...prevState, link];
        }
      });
    } else {
      alert(shorted.error);
    }

    setUrl("");
  }

  return (
    <form className={style.shorter} onSubmit={handleSubmit}>
      <div className={style.inputWrapper}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value.trim())}
          className={isEmpty ? style.input + " error" : style.input}
          placeholder="Shorten a link here..."
        />
        <button className={style.button}>Shorten It!</button>
      </div>
      {isEmpty && (
        <span className={style.errorMessage}>Please provide a URL</span>
      )}
    </form>
  );
}

export default Shorter;
