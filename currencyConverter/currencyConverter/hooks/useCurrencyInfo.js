import { useState, useEffect } from "react";

function useCurrencyInfo(baseCurrency, targetCurrency) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!baseCurrency || !targetCurrency) return;

    const url = `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_52WOcjCIhEhZMG7d2Udv5gquHrwFuN9Xm3gqt8Hv&currencies=${targetCurrency}&base_currency=${baseCurrency}`;

    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Currency fetch error:", err));
  }, [baseCurrency, targetCurrency]);

  return data;
}

export default useCurrencyInfo;