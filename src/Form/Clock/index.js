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
            {currentDate.toLocaleString(false, {
                weekday: "long",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                day: "numeric",
                month: "long",
                year: "numeric"
            })}
        </div>
    )
};
export default Clock