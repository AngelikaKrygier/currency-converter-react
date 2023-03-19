import React, { useState } from "react";
import Result from "./Result";
import Clock from "./Clock";
import { Fieldset, Legend, LabelText, Input, Button, Loading, Error, Message } from "./styled";
import { useRatesDate } from "./useRatesDate.js";

const Form = () => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("EUR");
    const [result, setResult] = useState("")
    const ratesData = useRatesDate()

    const calculateResult = (amount, currency) => {
        const rate = ratesData.rates[currency];

        setResult({
            targetAmount: amount * rate,
            currency,
        })
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, currency);
    };

    if (ratesData.status === "loading") {
        return (
            <Loading>
                Właśnie ładują się kursy walut z Europejskiego Banku Centralnego! 🙂
            </Loading>
        );
    }

    if (ratesData.status === "error") {
        return (
            <Error>
                Coś poszło nie tak 😞 <br />
                Sprawdź czy masz połączenie z internetem🙂<br />
                Jeśli tak, daj nam chwilkę na naprawę błędu, jeśli możesz - wróć do nas póżniej!🙂
            </Error>
        );
    }

    return (
        <form onSubmit={onFormSubmit}>
            <Fieldset>
                <Clock />
                <Legend>KALKULATOR WALUT</Legend>
                <p>
                    <label> <LabelText> kwota w zł*: </LabelText>
                        <Input
                            type="number"
                            name="amount"
                            min="1"
                            step="any"
                            required={true}
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                        />
                    </label>
                </p>
                <p>
                    <label> <LabelText>waluta</LabelText>
                        <Input
                            as="Select"
                            name="currency"
                            value={currency}
                            onChange={({ target }) => setCurrency(target.value)}
                        >
                            {Object.keys(ratesData.rates).map(((currency) =>
                                <option
                                    key={currency}
                                    value={currency}
                                >
                                    {currency}
                                </option>
                            ))}
                        </Input>
                    </label>
                </p>
                <p>
                    <Result
                        result={result}
                    />
                </p>
                <Message>
                    Kursy walut pobierane są z Europejskiego Banku Centralnego.<br />
                    Aktualne na dzień:<br />
                    {ratesData.date}
                </Message>
            </Fieldset>
            <Button>
                Przelicz!
            </Button>
        </form >
    );
};
export default Form