import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/action";

const AddTask = ({ filter, handleFilter }) => {
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    text
      ? dispatch(addTask({ id: Math.random(), description: text, isOk: false }))
      : alert("fill the description plz!!!");
    setText("");
  };
  return (
    <div className="title">
      <h1> Panda to do APP </h1>
      <form onSubmit={handleSubmit}>
        <input
          className="st"
          type="text"
          value={text}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
      <br></br>
      <button onClick={handleFilter}> {filter ? "all" : "filter"} </button>
    </div>
  );
};

export default AddTask;
