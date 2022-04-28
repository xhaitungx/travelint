import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";

import "../payment.scss";
const UserInfor = ({ customerData, setCustomerData }) => {
  const customerID = window.sessionStorage.getItem("customerID");
  const bookTourInfor = JSON.parse(
    window.localStorage.getItem("bookTourInfor")
  );

  const handleChange = (e) => {
    switch (e.target.id) {
      case "ho_ten":
        setCustomerData({ ...customerData, ho_ten: e.target.value });
        break;
      case "sdt":
        setCustomerData({ ...customerData, sdt: e.target.value });
        break;
      case "email":
        setCustomerData({ ...customerData, email: e.target.value });
        break;
      case "dia_chi":
        setCustomerData({ ...customerData, dia_chi: e.target.value });
        break;
    }
  };

  const handleUpdate = (e) => {
    switch (e.target.id) {
      case "ho_ten":
        axios.put(
          `https://tour-api-dev.herokuapp.com/khachhang/${customerID}`,
          {
            ho_ten: customerData.ho_ten,
          }
        );
        break;
      case "sdt":
        axios.put(
          `https://tour-api-dev.herokuapp.com/khachhang/${customerID}`,
          {
            sdt: customerData.sdt,
          }
        );
        break;
      case "email":
        axios.put(
          `https://tour-api-dev.herokuapp.com/khachhang/${customerID}`,
          {
            email: customerData.email,
          }
        );
        break;
      case "dia_chi":
        axios.put(
          `https://tour-api-dev.herokuapp.com/khachhang/${customerID}`,
          {
            dia_chi: customerData.dia_chi,
          }
        );
        break;
    }
  };

  return (
    <div className="payment padding-section">
      <div className="tour--infor">
        <div className="tour--infor__container">
          <img src={`https://tour-api-dev.herokuapp.com${bookTourInfor.img}`} />
          <div className="tour--infor__detail">
            <h1>Tour:{bookTourInfor.name}</h1>
            <h3>
              Số người: <span>{bookTourInfor.number}</span>
            </h3>
            <h3>
              Thời gian khởi hành: <span>{bookTourInfor.date}</span>
            </h3>
          </div>
        </div>
      </div>
      <div className="payment--form">
        <form>
          <div className="payment--form__input">
            <div className="row">
              <TextField
                id="email"
                name="email"
                label="email"
                type="email"
                onChange={handleChange}
                onBlur={handleUpdate}
                value={customerData.email || ""}
                sx={{ flex: "1" }}
              />
              <TextField
                id="ho_ten"
                name="name"
                label="Họ tên"
                type="text"
                onChange={handleChange}
                onBlur={handleUpdate}
                sx={{ flex: "1" }}
                value={customerData.ho_ten || ""}
              />
            </div>
            <TextField
              id="dia_chi"
              name="address"
              label="Địa chỉ liên hệ"
              type="text"
              onChange={handleChange}
              onBlur={handleUpdate}
              value={customerData.dia_chi || ""}
            />
            <TextField
              id="sdt"
              name="sdt"
              label="Số điện thoại"
              type="number"
              onChange={handleChange}
              onBlur={handleUpdate}
              value={customerData.sdt || ""}
            />
          </div>
          <div className="playment--form__button">
            <h1>{bookTourInfor.gia} vnđ</h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserInfor;
