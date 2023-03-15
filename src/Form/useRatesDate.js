import { useEffect, useState } from "react";
import axios from "axios";

export const useRatesDate = () => {
    const [ratesData, setRateDate] = useState({
        status: "loading",
    })

    useEffect(() => {
        const getRates = async () => {
            try {
                const response = await axios.get("https://api.exchangerate.host/latest?base=PLN");
                setRateDate({
                    status: "success",
                    rates: response.data.rates,
                    date: response.data.date
                });
            } catch {
                setRateDate({
                    status: "error",
                });
            }
        };
        setTimeout(getRates, 1000);
    }, []);

    return ratesData;
};