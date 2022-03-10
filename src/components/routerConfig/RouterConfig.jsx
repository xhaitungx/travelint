import React from "react";

import { Routes, Route } from "react-router-dom";
import { Home, Detail, Login } from "../../pages";
const RouterConfig = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />

        <Route path="Detail" element={<Detail />} />

        <Route path="Login" element={<Login login={true} />} />
        <Route path="Signup" element={<Login login={false} />} />
      </Routes>
    </>
  );
};

export default RouterConfig;
