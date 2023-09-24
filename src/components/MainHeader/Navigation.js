import React from "react";

import classes from "./Navigation.module.css";
import AuthContext from "../../context/auth-context";

const Navigation = (props) => {
  return (
    <AuthContext.Consumer>
      {(contx) => {
        return (
          <nav className={classes.nav}>
            <ul>
              {contx.isLoggedIn && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}
              {contx.isLoggedIn && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}
              {contx.isLoggedIn && (
                <li>
                  <button onClick={props.onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default Navigation;
