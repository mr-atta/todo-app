import React from "react";
import { useContext, useEffect, useState } from "react";
import { SettingsContext } from "../context/context";
import { Card, Elevation } from "@blueprintjs/core";
import { Input, FormLabel, FormHelperText, FormGroup } from "@mui/material";

function List(props) {
  const { toggleComplete, list, deleteItem } = props;

  const set = useContext(SettingsContext);

  const [cItems, setCItems] = useState([]);
  const [cPage, setCPage] = useState(1);
  const [pagesNum, setPagesNum] = useState(0);

  // console.log(list.length);
  // console.log(set.number);
  // console.log(Math.ceil(list.length / set.number)); // ✔
  // console.log(pagesNum); ///// ✔ >>>  useEffect num 1

  console.log({ cItems });
  console.log({ cPage });
  console.log({ pagesNum });

  // useEffect num 2
  useEffect(() => {
    if (set.display) {
      console.log("ttttttttttttttt");
      // true
      let start = (cPage - 1) * set.number;
      let end = start + set.number;
      setPagesNum(Math.ceil(list.length / set.number));
      setCItems(list.slice(start, end));
    } else {
      console.log("fffffffffffffffffff");
      // false
      let elements = list.filter((ele) => {
        // if false return true
        return ele.complete === false;
      });
      let start = (cPage - 1) * set.number;
      let end = start + set.number;

      setPagesNum(Math.ceil(elements.length / set.number));
      setCItems(elements.slice(start, end));
    }
  }, [cPage, set.display]);

  // f>> t and t>> f
  function next() {
    set.setDisplay(!set.display);
  }

  // useEffect num 1
  useEffect(() => {
    let start = (cPage - 1) * set.number;
    let end = start + set.number;

    setPagesNum(Math.ceil(list.length / set.number));
    setCItems(list.slice(start, end));
  }, [list.length]);

  const handelPages = () => {
    let pages = [];
    for (let i = 1; i <= pagesNum; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => {
            setCPage(i);
            console.log(cPage); ////// ✔
          }}
        >{`page ${i}`}</button>
      );
    }
    return pages;
  };

  // function deleteItem(id) {
  //   const items = list.filter((item) => item.id !== id);
  //   setList(items);
  // }

  return (
    <div className="list-countener">
      {/* <span>{`page number ${cPage}`}</span> */}

      {/* <FormGroup>
        <FormHelperText> Item's numbers in page:</FormHelperText>
        <Input
          type="number"
          Rule
          name="formControl"
          defaultValue={set.number}
          onChange={(e) => set.setNumber(e.target.value)}
        />
      </FormGroup> */}

      {list.map((item, i) => (
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

            <hr />
            {/*  ✔✔ */}
            <button id="deleteBtn" onClick={() => deleteItem(item.id)}>
              ❌{" "}
            </button>
          </div>
        </Card>
      ))}

      {/* <button onClick={next}>View Completed: </button> */}

      {/* {cPage > 1 && (
        <button
          onClick={() => {
            setCPage(cPage - 1);
          }}
        >
          Previous
        </button>
      )} */}

      {handelPages()}

      {/* {cPage < pagesNum && (
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
