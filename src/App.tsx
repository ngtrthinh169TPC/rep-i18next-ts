import "./App.css";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t } = useTranslation();

  return (
    <div className="App">
      <p>{t("example")}</p>
      <p>{t("example", { ns: 'translation' })}</p>
      <p>{t("translation:example")}</p>
      {/* this is not a valid t usage: */}
      {/* <p>{t("translation.example")}</p> */}
    </div>
  );
};

export default App;
