import React from "react";
import UpdateComponent from "./UpdateComponent";
import "./TaskListComponent.css";

export default function TaskListComponent(props) {
  function passValueToParent(updatedTask, taskIndex) {
    console.log("Received in TaskListComponent", updatedTask, taskIndex);
    props.getUpdatedTaskValue(updatedTask, taskIndex);
  }

  return (
    <div>
      {props.tasksListArray.map((item, index) => (
        <div
          key={item + index}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={{ display: "flex" }}>
            <label className="task-label">{item}</label>
            <button
              onClick={() => {
                console.log("User selected " + index + "th item to delete");
                props.deleteTask(index);
              }}
            >
              Delete
            </button>
          </div>
          <div style={{ display: "flex" }}>
            <UpdateComponent
              taskIndex={index}
              getUpdatedTaskValue={passValueToParent}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
