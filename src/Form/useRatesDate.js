import { useEffect, useState } from "react";
import axios from "axios";

export const useRatesDate = () => {
    const [ratesData, setRateDate] = useState({
        status: "loading",
    })

    const API_URL = "https://api.exchangerate.host/latest?base=PLN"

    useEffect(() => {
        const getRates = async () => {
            try {
                const response = await axios.get(API_URL);
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