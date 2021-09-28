import React from "react";
import { useContext } from "react";
import { When, If } from "react-if";
import contextAuth from "../context/contextAuth";

export default function Auth(props) {
  const context = useContext(contextAuth);

  let render =
    context.loggedIn && props.capability
      ? context.user.capabilities.includes(props.capability)
      : false;

  return <When condition={render}>{props.children}</When>;
}
