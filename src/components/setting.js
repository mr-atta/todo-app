import React from "react";
import { useContext, useEffect, useState } from "react";

import { SettingsContext } from "../context/context";

function Settings() {
  const settingsContext = useContext(SettingsContext);
  const [show, setShow] = useState(true);
  const [itemNumber, setItemNumber] = useState(2);

  //   function handleItemNumber(e) {
  //     setItemNumber(Number(e.target.value));
  //   }

  function handleView(e) {
    if (e.target.checked) {
      setShow(e.target.checked);
    } else {
      setShow(e.target.checked);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    settingsContext.setperPage(Number(itemNumber));
    settingsContext.setshowCompleted(show);
  }

  useEffect(() => {
    let payload = {
      itemPerPage: settingsContext.number,
      showCompleted: settingsContext.display,
    };
    if (settingsContext.number) {
      localStorage.setItem("settingsContext", JSON.stringify(payload));
    }
  }, [settingsContext]);

  return (
    <form
      className="Settings"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <label>Number of items per page</label>
      <input
        name="items"
        type="number"
        placeholder={2}
        value={itemNumber}
        min={1}
        onChange={(e) => setItemNumber(Number(e.target.value))}
      ></input>

      <br />

      <label>View completed items</label>
      <input name="view" type="checkbox" onChange={handleView}></input>

      <button type="submit">Go</button>
    </form>
  );
}

export default Settings;
