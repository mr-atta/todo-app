import React, { useEffect, useState } from "react";
import useForm from "../../hooks/form.js";
import Settings from "../setting";

import { v4 as uuid } from "uuid";

import Form from "../Form";
import List from "../List.js";
// import Header from "../Header";
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
      {/* <Header /> */}

      <header className="TODO">
        <h1>&nbsp; To Do List Manager ({incomplete})</h1>
      </header>

      <Settings />

      <div className="page">
        <Form add={addItem} />

        <List
          list={list}
          toggleComplete={toggleComplete}
          deleteItem={deleteItem}
        />
      </div>
    </>
  );
};

export default ToDo;
