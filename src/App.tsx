import "./App.css";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t } = useTranslation();

  return (
    <div className="App">
      <p>{t("example")}</p>
      <p>{t("translation.example")}</p>
      <p>{t("translation:example")}</p>
    </div>
  );
};

export default App;
