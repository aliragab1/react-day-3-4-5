import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./router";
import { LanguageContext } from "./context/language";
import { useState } from "react";

function App() {
  const [lang, setLang] = useState("en");
  return (
    <BrowserRouter>
      <LanguageContext.Provider value={{ lang, setLang }}>
        <div
          className={lang === "ar" ? "text-right" : "text-left"}
          dir={lang === "ar" ? "rtl" : "ltr"}
        >
          <Router />
        </div>
      </LanguageContext.Provider>
    </BrowserRouter>
  );
}

export default App;
