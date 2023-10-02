import React, { useState } from "react";

export default function UpdateComponent(props) {
  const [showInputField, setShowInputField] = useState(false);
  function handleUpdateClick() {
    setShowInputField(true);
  }
  function getUpdatedTaskDetails(event) {
    props.getUpdatedTaskValue(event.target.value, props.taskIndex);
  }
  return (
    <div>
      {" "}
      {/** React.Fragment */}
      {showInputField && <input type={"text"} onBlur={getUpdatedTaskDetails} />}
      <button onClick={handleUpdateClick}>Update</button>
    </div>
  );
}
