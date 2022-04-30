import React, { useState, useEffect, useLayoutEffect, useContext } from "react";
import axios from "axios";
import { LoginContext } from "../../../../LoginContext";
const BookedTour = () => {
  const [customerJoinedTour, setCustomerJoinedTour] = useState([]);
  const customerID = useContext(LoginContext);

  useEffect(() => {
    axios(`https://tour-api-dev.herokuapp.com/thanhtoan`).then(({ data }) => {
      const filterData = data.filter(
        (bookedTour) => bookedTour.id_khach_hang["_id"] === customerID
      );
      console.log(filterData);
      setCustomerJoinedTour(filterData);
    });
  }, []);

  const renderTour = (tour) => (
    <div
      className="tour--item"
      style={{ display: "flex", gap: "2rem", marginBottom: "3rem" }}
    >
      {/* <img
        src={`http://tour-api-dev.herokuapp.com${tour.hinh[0]}`}
        style={{ width: "20%" }}
      /> */}
      <div style={{ width: "50%" }}>
        <h3>Tên tour: {tour.id_tour.ten}</h3>
        <h3>Ngày khởi hành: {tour.id_tour.khoi_hanh}</h3>
      </div>

      <h3 style={{ width: "10%" }}>{tour.thanh_tien}đ</h3>
      <h3 style={{ width: "10%" }}>{tour.trang_thai_duyet}</h3>
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
