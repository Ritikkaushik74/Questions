import React, { useState } from "react";

function SortString() {
  const [text, settext] = useState("");
  const [string_Array, setstring_Array] = useState([]);

  const onsubmithandler = (e) => {
    e.preventDefault();

    settext("");

    // console.log(text);
    setstring_Array((prevState) => [...prevState, text]);
    console.log(string_Array);
  };


  return (
    <div className="container">
      <p>Q3. Sort String according to their first character</p>
      <form
        className="formTag"

        onSubmit={(e) => {
          onsubmithandler(e);
        }}
      >
        <label>Add item</label>
        <input
          className="inputTag"
          type="text"
          value={text}
          onChange={(e) => settext(e.target.value)}
          placeholder="Enter String Elements"
        />

        <button type="submit">Add</button>
      </form>
      <div className="output">
        <p>Sorted String Array</p>
      </div>
      <div className='sorted_container'>
        {
          string_Array.sort().map((data, i) => (<div className='sort_element' key={i} ><p>{i + 1}.</p><p>{data}</p></div>))
        }

      </div>

    </div >
  );
}
export default SortString;
