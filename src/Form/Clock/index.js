import { StyledClock } from "./styled";
import { useCurrentDate } from "./useCurrentDate";


const formatDate = (date) => date.toLocaleString("pl-PL", {
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    day: "numeric",
    month: "long",
    year: "numeric"
});

const Clock = () => {
    const date = useCurrentDate();

    return (
        <StyledClock>
            Dzisiaj jest {" "}
            {formatDate(date)}
        </StyledClock>
    )
};
export default Clock