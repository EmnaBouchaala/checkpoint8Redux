import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddTask from "./AddTask";
import Task from "./Task";

const ListTask = () => {
  const llistTask = useSelector((state) => state);
  const [filter, setFilter] = useState(false);
  const handleFilter = () => setFilter(!filter);
  return (
    <div>
      <AddTask filter={filter} handleFilter={handleFilter} />
      <Task tasks={filter ? llistTask.filter((el) => el.isOk) : llistTask} />
    </div>
  );
};

export default ListTask;
