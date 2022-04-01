import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import { TourCard } from "../../components";

import "./cardList.scss";

const CardList = ({ DataTours, tag }) => {
  return (
    <>
      <div className="cardList">
        {DataTours.length == 0 ? (
          <h2>Hiện tại chưa có tour du lịch liên quan đến "{tag}"</h2>
        ) : (
          DataTours.map((tour) => (
            <TourCard tourData={tour} key={tour["_id"]} />
          ))
        )}
      </div>
    </>
  );
};

export default CardList;
