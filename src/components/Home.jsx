import LanguageSelector from "./language-selector";
import { Trans, useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  const { line1, line2 } = t("description", { channel: "RoadsideCoder" });
  document.title = t("app_title");

  return (
    <div className="container">
      <LanguageSelector />
      <h1>{t("greeting")}</h1>
      <span>
        <Trans
          // i18nKey={"description.line1"}
          i18nKey={line1}
          values={{
            channel: "RoadsideCoder",
          }}
          components={{ 1: <b /> }}
        ></Trans>
      </span>
      <span>{line2}</span>
      {/* <span>{t("greeting.key", "can't load")}</span> */}
    </div>
  );
};

export default Home;
