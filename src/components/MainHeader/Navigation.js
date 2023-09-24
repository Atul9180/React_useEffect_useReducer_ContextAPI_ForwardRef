import React, { useContext } from "react";

import classes from "./Navigation.module.css";
import AuthContext from "../../context/auth-context";

const Navigation = () => {
  //storing AuthContext value in constant contx....
  const contx = useContext(AuthContext);
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
            <button onClick={contx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
