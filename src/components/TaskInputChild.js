import React, { useState } from "react";
import './TaskInputChild.css'
export default function TaskInputChild(props) {
  const [newTask, setNewTask] = useState("");
  function setNewTaskValue(event) {
    setNewTask(event.target.value);
  }
  function passValueToParent() {
    props.receiveNewTask(newTask);
  }
  return (
    <div>
      <h2 className="title-style">Enter the task name</h2>
      <input className="input-button" type={"text"} onBlur={setNewTaskValue} />
      <button className="add-button" onClick={passValueToParent}>Add Task</button>
    </div>
  );
}
