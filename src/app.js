import React from "react";
import ToDo from "./components/todo/todo.js";
import SettingsContext from "./context/context";

import "./app.css";

function App() {
  return (
    <>
      <SettingsContext>
        <ToDo />
      </SettingsContext>
    </>
  );
}
export default App;
