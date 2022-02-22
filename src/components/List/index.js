import React from "react";

function FormList({ taskList, removeTask }) {
  const handleRemoveTask = (todoId) => {
    console.log(todoId);
    const newTodoList = taskList.filter((todo) => todo.id !== todoId);
    removeTask(newTodoList);
  };
  return (
    <div className="mt-3 ">
      {taskList &&
        taskList.map((task) => {
          return (
            <div
              className="d-flex justify-content-center align-items-center my-2 mx-3"
              key={task.id}
            >
              <div className="w-75 me-3 text-center rounded border-bottom border-start border-dark overflow-auto">
                <span className="text-family fs-">{`${task.content}`}</span>
              </div>
              <div>
                <button
                  type="button"
                  className=" close btn btn-danger btn-sm"
                  onClick={() => handleRemoveTask(task.id)}
                >
                  <ion-icon name="trash-outline"></ion-icon>
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default FormList;
