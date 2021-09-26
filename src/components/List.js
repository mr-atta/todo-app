import React from "react";
import { useContext, useEffect, useState } from "react";
import SettingsContext from "../context/context";
import { Card, Button, Elevation } from "@blueprintjs/core";

function List(props) {
  const { toggleComplete, list } = props;
  const context = useContext(SettingsContext);

  const [cItems, setCItems] = useState([]);
  const [cPage, setCPage] = useState(1);
  const [pagesNum, setPagesNum] = useState(
    Math.ceil(list.length / SettingsContext.number)
  );

  const handelPages = () => {
    let pages = [];
    for (let i = 1; i <= pagesNum; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => {
            setCPage(i);
          }}
        >{`page ${i}`}</button>
      );
    }
    return pages;
  };

  return (
    <div className="list-countener">
      <span>{`page number ${cPage}`}</span>
      {list.map((item) => (
        <Card interactive={true} elevation={Elevation.TWO}>
          <div className="card" key={item.id}>
            <p>{item.text}</p>
            <h5>
              <small>Assigned to: {item.assignee}</small>
            </h5>
            <h5>
              <small>Difficulty: {item.difficulty}</small>
            </h5>
            <span
              className={item.complete.toString()}
              onClick={() => toggleComplete(item.id)}
            ></span>
            {/* <Button>Submit</Button> */}

            <hr />
          </div>
        </Card>
      ))}

      {/* {handelPages()}

      {cPage > 1 && (
        <button
          onClick={() => {
            setCPage(cPage - 1);
          }}
        >
          Previous
        </button>
      )}

      {cPage < pagesNum && (
        <button
          onClick={() => {
            setCPage(cPage + 1);
          }}
        >
          Next
        </button>
      )} */}
    </div>
  );
}

export default List;
