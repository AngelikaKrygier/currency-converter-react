import "./style.css";

const Result = ({ result }) => {

    return (
        <p className="form__paragraph">
            wartość w PLN:
            <span
                className="form__result">
                {result !== undefined && (
                    <>
                        {result.targetAmount}&nbsp;{result.currency}
                    </>
                )}
            </span>
        </p>
    )
};

export default Result