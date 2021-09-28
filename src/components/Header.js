import React from "react";
import { Navbar, Alignment, Button } from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";

import Login from "./login";
import { flexbox } from "@mui/system";

function Header(props) {
  return (
    <>
      {/* <div id="Nav-Div">
        <Navbar id="Navbar">
          <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading> &nbsp; Home</Navbar.Heading>
          </Navbar.Group>
        </Navbar>
      </div> */}

      <Navbar class="bp3-navbar bp3-dark" style={{ marginBottom: "1%" }}>
        <div class="bp3-navbar-group bp3-align-left">
          <div class="bp3-navbar-heading">To Do List</div>
        </div>
        <div
          class="bp3-navbar-group bp3-align-right"
          style={{ display: "flexbox" }}
        >
          <button class="bp3-button bp3-minimal bp3-icon-home">Home</button>

          {/* <Login /> */}
          {/* <SignUp style={{ width: "200px" }} /> */}

          <Button class="bp3-button bp3-minimal bp3-icon-home">Login</Button>
          <Button class="bp3-button bp3-minimal bp3-icon-home">SignUp</Button>
        </div>
      </Navbar>
    </>
  );
}

export default Header;
