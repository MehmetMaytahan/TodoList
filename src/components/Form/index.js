import React, { useState, useEffect } from "react";

function Form({ addTask, task }) {
  const [form, setForm] = useState("");

  useEffect(() => {
    setForm("");
  }, [task]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (form === "") {
      return false;
    }
    const newTodo = {
      id: Math.floor(Math.random() * 9873214),
      content: form,
      isActive: false,
    };

    const findContent = task.find(
      (content) => content.content.toLowerCase() === form.toLowerCase()
    );

    if (findContent) {
      setForm("");
    } else {
      addTask([...task, newTodo]);
    }
  };

  const onChange = (e) => {
    setForm(e.target.value);
  };

  return (
    <>
      <div className="text-center align items center my-3">
        <h2 className="text-family fs-1">Todo List</h2>
      </div>

      <div className="d-flex justify-content-center">
        <div className="w-50">
          <input
            className="rounded w-100 border text-center"
            onChange={onChange}
            value={form}
            placeholder="Add to Task"
          />
        </div>
        <div className="ms-4">
          <button className="rounded btn btn-success btn-sm" onClick={onSubmit}>
            <ion-icon name="duplicate"></ion-icon>
          </button>
        </div>
      </div>
    </>
  );
}

export default Form;
