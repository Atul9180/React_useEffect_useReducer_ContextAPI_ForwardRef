import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./context/auth-context";

function App() {
  const contx = useContext(AuthContext);
  return (
    <>
      <MainHeader />
      <main>
        {!contx.isLoggedIn && <Login />}
        {contx.isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default App;
