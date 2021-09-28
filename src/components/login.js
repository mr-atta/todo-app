import React from "react";
import { contextAuth } from "../context/contextAuth";
import { useContext, useState } from "react";
import { When, If, Then, Else } from "react-if";
import { Navbar, Alignment, Button } from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";

export default function Login() {
  const context = useContext(contextAuth);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    context.login(username, password);
  };

  return (
    <>
      <If condition={context.loggedIn}>
        <Then>
          <Button
            class="bp3-button bp3-minimal bp3-icon-home"
            onClick={context.logout}
          >
            Logout
          </Button>
        </Then>
        <Else>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="text"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button class="bp3-button bp3-minimal bp3-icon-home" type="submit">
              Login
            </Button>
          </form>
        </Else>
      </If>
    </>
  );
}
