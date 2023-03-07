import "./style.css";
import { useState, useEffect } from "react";

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

    return (
        <div class="clock"> Dzisiaj jest {" "}
            {currentDate.toLocaleString("pl-PL", {
                weekday: "long",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                day: "numeric",
                month: "long",
                year: "numeric"
            })}
        </div>
    )
};
export default Clock