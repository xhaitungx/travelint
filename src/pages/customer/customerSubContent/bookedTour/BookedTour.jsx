import React, { useState, useEffect, useLayoutEffect, useContext } from "react";
import axios from "axios";
import { LoginContext } from "../../../../LoginContext";
const BookedTour = () => {
  const [customerJoinedTour, setCustomerJoinedTour] = useState([]);
  console.log(customerJoinedTour);
  const customerID = useContext(LoginContext);

  useEffect(() => {
    axios(`https://tour-api-dev.herokuapp.com/khachhang/${customerID}`).then(
      ({ data }) => setCustomerJoinedTour(data.tours_da_dat)
    );
  }, []);

  const renderTour = (tour) => (
    <div
      className="tour--item"
      style={{ display: "flex", gap: "2rem", marginBottom: "3rem" }}
    >
      <img
        src={`http://tour-api-dev.herokuapp.com${tour.hinh[0]}`}
        style={{ width: "20%" }}
      />
      <div style={{ width: "50%" }}>
        <h3>Tên tour: {tour.ten}</h3>
        <h3>Ngày khởi hành: {tour.khoi_hanh}</h3>
      </div>

      <h3 style={{ width: "10%" }}>{tour.gia}đ</h3>
    </div>
  );
  return (
    <>
      <p>Tour đã đặt</p>
      <div className="customer--tour__Container">
        {customerJoinedTour?.map((tour) => renderTour(tour))}
      </div>
    </>
  );
};

export default BookedTour;
