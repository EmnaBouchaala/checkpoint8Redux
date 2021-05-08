import React from "react";
import { useDispatch } from "react-redux";
import { completeTask, deleteTask } from "../redux/action";
import EditForm from "./EditForm";

const Task = ({ tasks }) => {
  const dispatch = useDispatch();
  return (
    <div>
      {tasks.map((el) => (
        <div className="card">
          <h1 id={el.isOk ? "done" : ""}> {el.description} </h1>
          <button onClick={() => dispatch(completeTask(el.id))}>
            {" "}
            {el.isOk ? "Undo" : "Complete"}{" "}
          </button>
          <EditForm oldTask={el} />
          <button id="del" onClick={() => dispatch(deleteTask(el.id))}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Task;
