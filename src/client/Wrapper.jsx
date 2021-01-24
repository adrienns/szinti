import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import Hungarian from "./hun.json";
import English from "./en.json";

export const WrapperContext = React.createContext();

const ENG = "en";
const HUN = "hu";

const DEFAULT_LOCALE = navigator.language.includes(HUN) ? HUN : ENG;

const langFromStorage =
  JSON.parse(localStorage.getItem("lang")) || DEFAULT_LOCALE;

console.log(langFromStorage);

const Wrapper = (props) => {
  const local = langFromStorage;
  let lang;
  if (local === ENG) {
    lang = English;
  } else {
    lang = Hungarian;
  }

  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(lang);

  const switchEnglish = () => {
    setMessages(English);
    localStorage.setItem("lang", JSON.stringify(ENG));
    setLocale(ENG);
  };

  const switchHungarian = () => {
    setMessages(Hungarian);
    localStorage.setItem("lang", JSON.stringify(HUN));
    setLocale(HUN);
  };

  return (
    <WrapperContext.Provider value={{ switchEnglish, switchHungarian, locale }}>
      <IntlProvider
        messages={messages}
        locale={locale}
        defaultLocale={langFromStorage}
      >
        {props.children}
      </IntlProvider>
    </WrapperContext.Provider>
  );
};

export default Wrapper;
