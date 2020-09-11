import React, { useState } from "react";

function XOREvenOdd() {
    const [text, settext] = useState("");
    const [secText, setsecText] = useState("");

    const [Array, setArray] = useState([]);
    // const [status, setstatus] = useState()
    const onsubmithandler = (e) => {
        e.preventDefault();

        settext("");
        setsecText('')

        // console.log(text);


        var oddCount = (secText - text) / 2;
        if (secText % 2 === 1 || text % 2 === 1) { oddCount++ }

        if (oddCount % 2 === 0) { var status = 'Even' }
        else status = 'Odd'

        setArray((prevState) => [...prevState, { first: text, sec: secText, status: status }]);
        console.log(Array);
    };


    return (
        <div className="container">

            <p>Q2. Program to find if XOR of all the numbers in range L to R is odd or even</p>
            <form
                className="formTag"

                onSubmit={(e) => {
                    onsubmithandler(e);
                }}
            >
                <label>Odd or Even (XOR)</label>
                <input
                    className="xor_inputTag"
                    type="number"
                    value={text}
                    onChange={(e) => settext(e.target.value)}
                    placeholder="First Elements"
                />
                <input
                    className="xor_inputTag"
                    type="number"
                    value={secText}
                    onChange={(e) => setsecText(e.target.value)}
                    placeholder="Second Elements"
                />
                <button type="submit">Convert</button>
            </form>
            <div className="output">
                <p>Entered numbers are</p>
            </div>
            <div className='sorted_container'>
                {
                    Array.map((data, i) => (<div className='sort_element' key={i} ><p>{i + 1}.</p><p>{data.first}</p><p>{data.sec}</p><p>{data.status}</p></div>))
                }
            </div>
        </div >
    );
}
export default XOREvenOdd;
