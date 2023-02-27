import "./style.css";

const Form = () => (

    <form className="form">
        <fieldset className="form__fieldset">
            <legend className="form__legend">KALKULATOR WALUT</legend>
            <p>
                <label> <span className="form__labelText"> kwota*: </span> <input className="form__field"
                    type="number" name="amount" min="1" step="any" required />
                </label>
            </p>
            <p>
                <label> <span className="form__labelText">waluta</span>
                    <select className="form__field" name="currency">
                        <option name="EUR">EUR</option>
                        <option name="USD">USD</option>
                        <option name="CHF">CHF</option>
                    </select>
                </label>
            </p>
            <p>
                <label>
                    <p className="form__paragraph">
                        wartość w PLN: <span className="form__result"></span>
                    </p>
                </label>
            </p>
        </fieldset>
        <button className="form__button">Przelicz!</button>
        <button className="form__button" type="reset">Resetuj!</button>
    </form>

)

export default Form