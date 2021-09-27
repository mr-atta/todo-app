import React from "react";
import { useState } from "react";

export const SettingsContext = React.createContext();

export default function SettingsProvider(props) {
  const [display, setDisplay] = useState(false);
  const [number, setNumber] = useState(2);
  const [string, setString] = useState("");

  const state = {
    display,
    number,
    string,
    setDisplay,
    setNumber,
    setString,
  };

  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  );
}
