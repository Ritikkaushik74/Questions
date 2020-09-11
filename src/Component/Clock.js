import React, { useState } from "react";

function Clock() {
    const [text, settext] = useState("");
    const [time, settime] = useState({ hours: "", min: "", sec: "" });
    const onsubmithandler = (e) => {
        e.preventDefault();
        console.log(text);
        settext("");
        if (text) {
            let hours = Math.floor(text / 3600);
            let min = Math.floor(text / 60);
            let sec = Math.floor(text % 60);
            settime({
                hours,
                min,
                sec
            });
        }
    };
    return (
        <div className="container">
            <p>Q1. Program to get no of hours, minutes and seconds from no. of seconds</p>

            <form
                className="formTag"
                onSubmit={(e) => {
                    onsubmithandler(e);
                }}
            >
                <label>Converter</label>
                <input
                    className="inputTag"
                    type="number"
                    value={text}
                    onChange={(e) => settext(e.target.value)}
                    placeholder="Enter Seconds to convert into Hours and minutes"
                />

                <button type="submit">Convert</button>
            </form>
            <div className="hours">
                <div><p>Hours  </p><p>:</p><p>{time.hours}</p></div>
                <div><p>Minutes</p><p>:</p><p>{time.min}</p></div>
                <div> <p>Seconds</p><p>:</p><p>{time.sec}</p></div>
            </div>
        </div>
    );
}
export default Clock;
