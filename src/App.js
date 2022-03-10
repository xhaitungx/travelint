import React from "react";
import "lodash";
import "./App.scss";

import Navbar from "./components/navbar/Navbar";
import Footer from "./container/footer/Footer";
import { RouterConfig } from "./components";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <RouterConfig />
      <Footer />
    </div>
  );
};

export default App;
