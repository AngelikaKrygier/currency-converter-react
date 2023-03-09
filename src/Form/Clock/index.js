import { useState, useEffect } from "react";
import { StyledClock } from "./styled";

const Clock = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const currentDateView = currentDate.toLocaleString("pl-PL", {
        weekday: "long",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        day: "numeric",
        month: "long",
        year: "numeric"
    })

    return (
        <StyledClock>
            Dzisiaj jest {" "}
            {currentDateView}
        </StyledClock>
    )
};
export default Clock