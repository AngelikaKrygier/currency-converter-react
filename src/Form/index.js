import "./style.css";
import React, { useState } from "react";
import { currencies } from '../currencies.js'
import Result from "./Result";
import Clock from "./Clock";

const Form = ({ result, calculateResult }) => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[0].short);

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, currency);
    };

    return (
        < form
            className="form"
            onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <Clock/>
                <legend className="form__legend">KALKULATOR WALUT</legend>
                <p>
                    <label> <span className="form__labelText"> kwota w zł*: </span>
                        <input
                            className="form__field"
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
                    <label> <span className="form__labelText">waluta</span>
                        <select
                            className="form__field"
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
                        </select>
                    </label>
                </p>
                <p>
                    <Result
                        result={result}
                    />
                </p>
            </fieldset>
            <button
                className="form__button">
                Przelicz!
            </button>
        </form >
    );
};
export default Form