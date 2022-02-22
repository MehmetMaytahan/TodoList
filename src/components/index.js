import React, { useState } from "react";
import Form from "./Form";
import FormList from "./List";

function Todo() {
  const [task, setTask] = useState([]);
  return (
    <>
      <div className="container-md">
        <div className="rounded bg-todo shadow-sm py-4 justify-content-center align-items-center overflow-auto">
          <Form addTask={setTask} task={task} />
          <FormList taskList={task} removeTask={setTask} />
        </div>
      </div>
    </>
  );
}

export default Todo;
