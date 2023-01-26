import { useEffect, useState } from "react";
import Button from "../UI/Button";
import InfoCard from "./InfoCard";
import style from "./MainContent.module.css";
import ShortedLinkCard from "./ShortedLinkCard";
import Shorter from "./Shorter";

const items = JSON.parse(localStorage.getItem("shortedList")) || [];

function MainContent() {
  const [shortedList, setShortedList] = useState(items);
  const [copiedText, setCopiedText] = useState("");

  useEffect(() => {
    localStorage.setItem("shortedList", JSON.stringify(shortedList));
  }, [shortedList]);

  return (
    <main className={style.main}>
      <div className={style.wrapper}>
        <Shorter setShortedList={setShortedList} />
        {shortedList.map((link) => (
          <ShortedLinkCard
            key={link.full}
            {...link}
            setCopiedText={setCopiedText}
            copiedText={copiedText}
          />
        ))}
        <h2 className={style.title}>Advanced Statistics</h2>
        <p className={style.desc}>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className={style.infoWrapper}>
          <InfoCard
            url={
              "https://raw.githubusercontent.com/dogankocadayilar/url-shortening-api-landing-page/main/src/assets/images/icon-brand-recognition.svg"
            }
            title={"Brand Recognition"}
            desc={
              "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
            }
          />
          <InfoCard
            url={
              "https://raw.githubusercontent.com/dogankocadayilar/url-shortening-api-landing-page/main/src/assets/images/icon-detailed-records.svg"
            }
            title={"Detailed Records"}
            desc={
              "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
            }
          />
          <InfoCard
            url={
              "https://raw.githubusercontent.com/dogankocadayilar/url-shortening-api-landing-page/main/src/assets/images/icon-fully-customizable.svg"
            }
            title={"Fully Customizable"}
            desc={
              "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
            }
          />
        </div>
      </div>
      <div className={style.bottom}>
        <h2 className={style.bottomTitle}>Boost your links today</h2>
        <Button value={"Get Started"} />
      </div>
    </main>
  );
}

export default MainContent;
