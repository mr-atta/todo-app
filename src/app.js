import React from "react";
import ToDo from "./components/todo/todo.js";
import Header from "./components/Header";

import SettingsProvider from "./context/context";
// import ContextAuth from "./context/contextAuth";

import Auth from "./components/auth";
import Login from "./components/login";
// import Settings from "./components/setting";

import "./app.css";

function App() {
  return (
    <>
      <Header />

      <SettingsProvider>
        {/* <Settings /> */}
        <ToDo />
      </SettingsProvider>
    </>
  );
}
export default App;
