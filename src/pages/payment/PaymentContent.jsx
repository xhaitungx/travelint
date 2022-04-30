import React, { useState, useEffect } from "react";
import SwipeableViews from "react-swipeable-views";
import { Button } from "@mui/material";
import {
  WizzardHeader,
  UserInfor,
  AccompanyInfor,
} from "./paymentContent/index";
import "./paymentContent.scss";
import axios from "axios";
const PaymentContent = () => {
  const [onShowLinkInput, setOnShowLinkInput] = useState(false);
  const [activedStep, setActivedStep] = useState(0);

  const [customerData, setCustomerData] = useState({});

  useEffect(() => {
    const customerID = window.sessionStorage.getItem("customerID");
    axios(`https://tour-api-dev.herokuapp.com/khachhang/${customerID}`).then(
      ({ data }) => setCustomerData(data)
    );
  }, []);

  const handleButtonBack = () => {
    setActivedStep(activedStep - 1);
  };

  const handleButtonNext = () => {
    setActivedStep(activedStep + 1);
  };

  const handleChange = (index) => {
    setActivedStep(index);
  };

  const tourData = JSON.parse(localStorage.getItem("bookTourInfor"));

  const handleSubmit = (e) => {
    e.preventDefault();
    const patchDuKhachTour = (idDuKhaches) => {
      console.log([
        ...[...tourData.du_khach].map((item) => item["_id"]),
        ...idDuKhaches,
      ]);
      axios
        .patch(`https://tour-api-dev.herokuapp.com/tour/${tourData.id}`, {
          du_khach: [
            ...[...tourData.du_khach].map((item) => item["_id"]),
            ...idDuKhaches,
          ],
        })
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
    };
    axios
      .post(`https://tour-api-dev.herokuapp.com/dukhach`, accompanyData)
      .then(({ data }) => patchDuKhachTour(data))
      .catch((err) => console.log(err));
  };

  //User data
  const userData = {};
  //accompany data
  const numberGuest =
    JSON.parse(window.localStorage.getItem("bookTourInfor"))?.number - 1;
  const accompanyData = [];
  Array.from({ length: numberGuest }, (item, index) => {
    accompanyData.push({
      ho_ten: "",
      sdt: "",
    });
  });

  return (
    <div className="pagementContent">
      <h1>Thanh toán</h1>
      <WizzardHeader />
      <form className="pagementContent.form" onSubmit={handleSubmit}>
        <SwipeableViews index={activedStep} onChangeIndex={handleChange}>
          <UserInfor
            data={userData}
            customerData={customerData}
            setCustomerData={setCustomerData}
          />
          <AccompanyInfor
            onShowLinkInput={onShowLinkInput}
            setOnShowLink={setOnShowLinkInput}
            numberGuest={numberGuest}
            data={accompanyData}
          />
        </SwipeableViews>
        <div className="btn--group">
          <Button
            disabled={activedStep === 0}
            onClick={handleButtonBack}
            variant="contained"
          >
            Trở về
          </Button>
          {activedStep === 1 ? (
            <Button onClick={handleSubmit} variant="contained">
              Đặt tour
            </Button>
          ) : (
            <Button onClick={handleButtonNext} variant="contained">
              Tiếp tục
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default PaymentContent;
