import React, { useState } from "react";
import Child from "./Child";

function Search(props) {
  const [inputValue, setInputValue] = useState("");

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  const inputValueInsensitive = new RegExp(inputValue, "i");
  const filteredProps = props.names.filter((item) =>
    item.name.match(inputValueInsensitive)
  );

  return (
    <div>
      <div>
        <input
          className="searchDiv"
          type="text"
          value={inputValue}
          onChange={handleChange}
          name="myInput"
          placeholder="Write name..."
        ></input>

        {inputValue !== "" && (
          <div className="selectedNameDiv">
            {filteredProps.map((item, index) => (
              <div key={index}>
                <button
                  className="nameDiv"
                  style={{
                    backgroundColor: item.sex === "f" ? "pink" : "lightBlue",
                  }}
                >
                  {item.name}
                </button>
              </div>
            ))}
          </div>
        )}

        
      </div>
    </div>
  );
}

export default Search;
