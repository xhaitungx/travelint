import React from "react";
import { Routes, Route } from "react-router-dom";
import Account from "./customerSubContent/account/Account";
import BookedTour from "./customerSubContent/bookedTour/BookedTour";
const CustomerRouterConfig = () => {
  return (
    <Routes>
      <Route path="*" element={<Account />} />
      <Route path="bookedtour" element={<BookedTour />} />
    </Routes>
  );
};

export default CustomerRouterConfig;
