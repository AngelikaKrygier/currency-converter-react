import React, { useState } from "react";
import { currencies } from '../currencies.js'
import Result from "./Result";
import Clock from "./Clock";
import { Fieldset, Legend, LabelText, Input, Select, Button } from "./styled";

const Form = ({ result, calculateResult }) => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[0].short);

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, currency);
    };

    return (
        < form
            onSubmit={onFormSubmit}>
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
                        <Select
                            name="currency"
                            value={currency}
                            onChange={({ target }) => setCurrency(target.value)}
                        >
                            {currencies.map((currency =>
                                <option
                                    key={currency.short}
                                    value={currency.short}
                                >
                                    {currency.short}
                                </option>
                            ))}
                        </Select>
                    </label>
                </p>
                <p>
                    <Result
                        result={result}
                    />
                </p>
            </Fieldset>
            <Button>
                Przelicz!
            </Button>
        </form >
    );
};
export default Form