import React, { createContext } from "react";
import "lodash";
import "./App.scss";
import { LoginContext } from "./LoginContext";

import Navbar from "./components/navbar/Navbar";
import Footer from "./container/footer/Footer";
import { RouterConfig } from "./components";
const App = () => {
  return (
    <LoginContext.Provider value={window.sessionStorage.getItem("customerID")}>
      <div className="App">
        <Navbar />
        <RouterConfig />
        <Footer />
      </div>
    </LoginContext.Provider>
  );
};

export default App;
