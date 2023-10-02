import React, { useState } from "react";
import TaskInputChild from "./TaskInputChild";
import TaskListComponent from "./TaskListComponent";

export default function ParentComponent() {
  const [tasksListArray, setTasksListArray] = useState([]);
  //Tow way data binding
  function receiveNewTask(newTask) {
    console.log("received in parent", newTask);
    //const tempTaskListArray = tasksListArray + newTask
    // Update already existing tasks with new task value
    setTasksListArray([...tasksListArray, newTask]);
  }
  function getUpdatedTaskValue(updatedTask, taskIndex) {
    console.log("Received in ParentComponent", updatedTask, taskIndex);
    const newTaskListArray = [...tasksListArray];
    newTaskListArray[taskIndex] = updatedTask;
    setTasksListArray(newTaskListArray);
  }
  function deleteTask(index) {
    console.log("Received in parent " + index + "th item to delete");
    const newTaskListArray = [...tasksListArray];
    newTaskListArray.splice(index, 1); // ref https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    setTasksListArray(newTaskListArray);
  }
  return (
    <div>
      <TaskInputChild receiveNewTask={receiveNewTask} />
      <TaskListComponent
        tasksListArray={tasksListArray}
        getUpdatedTaskValue={getUpdatedTaskValue}
        deleteTask={deleteTask}
      />
    </div>
  );
}
