import React, { useState } from "react";
import Child from "./Child";

function GirlButton(props) {
  const [data, setData] = useState(props.names);

  const [showButtons, setShowButtons] = useState(false);

  const handleClick = () => {
    const filteredData = data.filter((item) => item.sex === "f");
    setData(filteredData);
    setShowButtons(true);
  };

  return (
    <div>
      <button type="radio" onClick={handleClick} style={{ background: "pink" }}>
        girls
      </button>
      {showButtons && <Child names={data} />}
    </div>
  );
}

export default GirlButton;
