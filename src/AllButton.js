import { useState } from "react";
import React from "react";
import Child from "./Child";

function AllButton(props) {
  const [showButtons, setShowButtons] = useState(false);

  const handleClick = () => {
    setShowButtons(true);
  };

  return (
    <div>
      <button
        type="radio"
        onClick={handleClick}
        style={{ background: "yellow" }}
      >
        all
      </button>
      {showButtons && <Child names={props.names} />}
    </div>
  );
}

export default AllButton;
