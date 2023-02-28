import "./style.css";
import React, { useState } from "react";
import { currencies } from '../currencies.js'
import Result from "./Result";

const Form = ({result, calculateResult}) => {

    const [amount, setAmount] = useState("")
    const [currency, setCurrency] = useState(currencies[0].short.value)

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);

    };

    return (
        < form
            className="form"
            onClick={onFormSubmit}>
            <fieldset className="form__fieldset">
                <legend className="form__legend">KALKULATOR WALUT</legend>
                <p>
                    <label> <span className="form__labelText"> kwota*: </span>
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
                    <label>
                        <Result
                            result={result}
                        />
                    </label>
                </p>
            </fieldset>
            <button className="form__button">Przelicz!</button>
            <button className="form__button" type="reset">Resetuj!</button>
        </form >
    )
}

export default Form