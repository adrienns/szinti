import React, { useEffect, useState } from "react";

const URL = "https://api.exchangeratesapi.io/latest";

function CurrencyConverter() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, settoCurrency] = useState();

  const findDefaultCurrency = (options) => {
    const defaultCurrency = options.find((el) => el === "HUF");

    return defaultCurrency;
  };
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        const options = Object.keys(data.rates);
        const defaultCurrency = findDefaultCurrency(options);

        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(defaultCurrency);
        settoCurrency(data.base);
      });
  }, []);

  return (
    <div>
      <div>
        <h5>currency converter</h5>
        <select value={fromCurrency}>
          {currencyOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <select>
          {" "}
          value={toCurrency}
          {currencyOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CurrencyConverter;
