import "./style.css";

const Result = ({ result }) => (
    <p className="form__paragraph">
        <span
            className="result">
            {result !== undefined && (
                <>
                    {"wartość: "}{result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                </>
            )}
        </span>
    </p>
);

export default Result