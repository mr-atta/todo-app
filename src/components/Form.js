import React from "react";
import useForm from "../hooks/form";
// import "./todo/todo.css";
import { FormGroup, InputGroup, Button } from "@blueprintjs/core";

function Form(props) {
  const { handleChange, handleSubmit } = useForm(props.add);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add To Do Item</h2>

      <label>
        <span>To Do Item</span>
        <br />
        <InputGroup
          onChange={handleChange}
          name="text"
          type="text"
          placeholder="Item Details"
        />
      </label>

      <label>
        <span>Assigned To</span>
        <br />
        <InputGroup
          onChange={handleChange}
          name="assignee"
          type="text"
          placeholder="Assignee Name"
        />
      </label>

      <label>
        <span>Difficulty</span>
        <br />
        <InputGroup
          onChange={handleChange}
          defaultValue={0}
          type="range"
          min={1}
          max={5}
          name="difficulty"
        />
      </label>

      <label>
        <Button type="submit">Add Item</Button>
      </label>
    </form>
  );
}

export default Form;
