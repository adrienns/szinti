import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import Hungarian from "./hun.json";
import English from "./en.json";

export const WrapperContext = React.createContext();

const Wrapper = (props) => {
  const local = navigator.language;
  let lang;
  if (local === "en") {
    lang = English;
  } else {
    lang = Hungarian;
  }

  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(lang);

  const switchEnglish = () => {
    setMessages(English);
    setLocale("en");
  };

  const switchHungarian = () => {
    setMessages(Hungarian);
    setLocale("hun");
  };

  return (
    <WrapperContext.Provider value={{ switchEnglish, switchHungarian }}>
      <IntlProvider messages={messages} locale={locale} defaultLocale="en">
        {props.children}
      </IntlProvider>
    </WrapperContext.Provider>
  );
};

export default Wrapper;
