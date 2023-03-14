import { useEffect, useState } from "react";

export const useRatesDate = () => {
    const [ratesData, setRateDate] = useState({
        status: "loading",
    })

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch("https://api.exchangerate.host/latest?base=PLN");
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const { rates, date } = await response.json();

                setRateDate({
                    status: "success",
                    rates,
                    date,
                });

            } catch {
                setRateDate({
                    status: "error",
                });
            }
        };
        setTimeout(fetchRates, 1000);
    }, []);

    return ratesData;
};