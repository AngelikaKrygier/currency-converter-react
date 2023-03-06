import "./style.css";

const Result = ({ result }) => (
    <p className="result">
        {result && (
            <>
                {"wartość: "}{result.targetAmount.toFixed(2)}&nbsp;{result.currency}
            </>
        )}
    </p>
);
export default Result