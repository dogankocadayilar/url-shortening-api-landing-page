import { useEffect, useState } from "react";
import style from "./ShortedLinkCard.module.css";

function ShortedLinkCard({ short, full, setCopiedText, copiedText }) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (short === copiedText) {
      setIsCopied(true);
    } else {
      setIsCopied(false);
    }
  }, [copiedText]);

  function copyShortLink() {
    navigator.clipboard.writeText(short);
    setCopiedText(short);
  }

  return (
    <div className={style.card}>
      <a href={full} target="_blank" className={style.fullLink}>
        {full.length > 50 ? full.substring(0, 30) + "..." : full}
      </a>
      <a href={short} target="_blank" className={style.shortLink}>
        {short}
      </a>
      <button
        className={style.button}
        disabled={isCopied}
        onClick={copyShortLink}
      >
        {isCopied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}

export default ShortedLinkCard;
