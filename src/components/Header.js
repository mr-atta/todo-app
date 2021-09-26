import React from "react";
import { Navbar, Alignment } from "@blueprintjs/core";

function Header(props) {
  const { incomplete } = props;
  return (
    <>
      <div id="Nav-Div">
        <Navbar id="Navbar">
          <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading> &nbsp; Home</Navbar.Heading>
          </Navbar.Group>
        </Navbar>
      </div>
      <header className="TODO">
        <h1>&nbsp; To Do List Manager ({incomplete})</h1>
      </header>
      ;
    </>
  );
}

export default Header;
