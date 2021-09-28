import React, { useEffect, useState } from "react";
import useForm from "../../hooks/form.js";

import { v4 as uuid } from "uuid";

import Form from "../Form";
import List from "../List.js";
import Header from "../Header";
import "./todo.css";

const ToDo = () => {
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  // const { handleChange, handleSubmit } = useForm(addItem);

  function addItem(item) {
    // console.log(item);
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {
    const items = list.map((item) => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  return (
    <>
      <Header incomplete={incomplete} />
      {/* <header className="TODO">
        <h1>&nbsp; To Do List Manager ({incomplete})</h1>
      </header> */}

      <div className="page">
        <Form add={addItem} />
        {/* <form className="form" onSubmit={handleSubmit}>
          <h2>Add To Do Item</h2>

          <label>
            <span>To Do Item</span>
            <br />
            <input
              onChange={handleChange}
              name="text"
              type="text"
              placeholder="Item Details"
            />
          </label>

          <label>
            <span>Assigned To</span>
            <br />
            <input
              onChange={handleChange}
              name="assignee"
              type="text"
              placeholder="Assignee Name"
            />
          </label>

          <label>
            <span>Difficulty</span>
            <br />
            <input
              onChange={handleChange}
              defaultValue={3}
              type="range"
              min={1}
              max={5}
              name="difficulty"
            />
          </label>

          <label>
            <button type="submit">Add Item</button>
          </label>
        </form> */}

        <List
          list={list}
          toggleComplete={toggleComplete}
          deleteItem={deleteItem}
        />
        {/* {list.map((item) => (
          <div className="card" key={item.id}>
            <p>{item.text}</p>
            <p>
              <small>Assigned to: {item.assignee}</small>
            </p>
            <p>
              <small>Difficulty: {item.difficulty}</small>
            </p>
            <div onClick={() => toggleComplete(item.id)}>
              Complete: {item.complete.toString()}
            </div>
            <hr />
          </div>
        ))} */}
      </div>
    </>
  );
};

export default ToDo;
