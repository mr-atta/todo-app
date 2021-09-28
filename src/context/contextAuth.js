import React, { useEffect, useState } from "react";
import superagent from "superagent";
import base64 from "base-64";
import jwt from "jsonwebtoken";
import cookie from "react-cookies";

const API = "https://auth-server-401.herokuapp.com";
export const contextAuth = React.createContext();

function ContextAuth(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  // initial render
  useEffect(() => {
    const tokenFromCookie = cookie.load("token");
    validateJwToken(tokenFromCookie);
  }, []);

  const login = async (username, password) => {
    // {username: password} encoded
    //Basic base64(username:password)

    const encodedUsernameAndPassword = base64.encode(`${username}:${password}`);

    const response = await superagent
      .post(`${API}/signin`)
      .set("authorization", `Basic ${encodedUsernameAndPassword}`);

    validateJwToken(response.body.token);
  };

  const validateJwToken = (token) => {
    if (token) {
      // the user is logged in
      const user = jwt.decode(token);
      setLoginState(true, user);

      cookie.save("token", token);
    } else {
      // the user is NOT logged in
      setLoginState(false, {});
    }
  };

  const setLoginState = (loggedIn, user) => {
    setLoggedIn(loggedIn);
    setUser(user);
  };

  const logout = () => {
    setLoginState(false, {});
    cookie.remove("token");
  };

  const can = (capability) => {
    return user?.capabilities?.includes(capability);
  };

  const state = {
    loggedIn,
    login,
    logout,
    user,
    can,
  };

  return (
    <contextAuth.Provider value={state}>{props.children}</contextAuth.Provider>
  );
}

export default ContextAuth;
