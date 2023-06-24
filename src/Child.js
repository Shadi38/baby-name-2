import React, { useState } from "react";

function Child(props) {
  const [newData, setNewData] = useState(props.names.sort((a, b) => a.name.localeCompare(b.name)));
//main buttons:
  const [buttonVisibility, setButtonVisibility] = useState(
    Array(newData.length).fill(true)
  );
  const [deletedButtons, setDeletedButtons] = useState([]);


//function for main buttons:
  const handleClick = (index) => {
    const updatedVisibility = [...buttonVisibility];
    updatedVisibility[index] = false;
    setButtonVisibility(updatedVisibility);

    const deletedButtonData = newData[index];
    setDeletedButtons((prevDeletedButtons) => 
      [...prevDeletedButtons, deletedButtonData]
      )
  };
//function for removing favourite buttons after clicking the button
  const handleClickFavourite = (index) => { 
const updatedDeletedButtons = [...deletedButtons];
//we accses the deleted element by '[0]'
//buttonToAdd  return the new array without the deleted button
const buttonToAdd = updatedDeletedButtons.splice(index, 1)[0];
setDeletedButtons(updatedDeletedButtons);
//adding deleted button from favourite section to main list
setNewData((prevData) => [...prevData, buttonToAdd]);
setButtonVisibility((prevVisibility) => [...prevVisibility, true]);
   }
  return (
    <div>
      {/* bring deleted buttons into favourite list  */}
      {deletedButtons.length > 0 && (
        <div>
          <p>Favourite Names:</p>
          <div>
            {deletedButtons.map((button, index) => (
              <div key={index}>
                <button
                  style={{
                    backgroundColor: button.sex === "f" ? "pink" : "lightBlue",
                  }}
                  onClick={() => handleClickFavourite(index)}
                >
                  {button.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* deleting each clicked button from favourite list */}

      <hr></hr>
      {/* deleting each button from the main list and assign the button visibility to each buttons */}
      <div>
        {newData.map((data, index) => {
          return (
            <div className="namesDiv" key={index}>
              {buttonVisibility[index] && (
                <button
                  style={{
                    backgroundColor: data.sex === "f" ? "pink" : "lightBlue",
                  }}
                  onClick={() => handleClick(index)}
                >
                  {data.name}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Child;
