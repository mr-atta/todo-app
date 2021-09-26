import React from "react";

export const SettingsContext = React.createContext();

export default function SettingsProvider(props) {
  const state = {
    display: false,
    number: 4,
    string: "string",
  };

  // changeTwitter = (twitter) => {
  //     const [twitter, setTwitter] = useState('');
  // }

  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  );
}
