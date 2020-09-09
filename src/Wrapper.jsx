import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import Hungarian from "./hun.json";
import English from "./en.json";

export const Context = React.createContext();

const local = navigator.language;
let lang;
if (local === "en") {
  lang = English;
} else {
  lang = Hungarian;
}

const Wrapper = (props) => {
  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(lang);

  const switchEnglish = () => {
    setMessages({ locale: "en", messages: English });
  };

  const switchHungarian = () => {
    setMessages({ locale: "hun", messages: Hungarian });
  };

  return (
    <Context.Provider value={{ switchEnglish, switchHungarian }}>
      <IntlProvider messages={messages} locale={locale} defaultLocale="en">
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
};

export default Wrapper;
