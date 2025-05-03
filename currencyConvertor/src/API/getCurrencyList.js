import { useEffect, useState } from "react";

function useCurrencyList() {
    const [currencyList, setCurrencyList] = useState({});

    useEffect(() => {
        fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json")
            .then((res) => res.json()) // ✅ CALL json() properly
            .then((res) => setCurrencyList(res))
            .catch((err) => {
                console.error("Failed to fetch currency list:", err);
                setCurrencyList({});
            });
    }, []); // ✅ include empty dependency array

    return currencyList;
}

export default useCurrencyList;
