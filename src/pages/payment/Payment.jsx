import React from "react";

import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import "./payment.scss";
const Payment = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      address: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="payment padding-section">
      <div className="tour--infor">
        <img src="https://lp-cms-production.imgix.net/2021-02/Tokyo%20Main.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850" />
        <div className="tour--infor__detail">
          <p>Tour:{"Osaka"}</p>
          <p>Số người:{2}</p>
          <p>Thời gian:{"12/4"}</p>
        </div>
      </div>
      <div className="payment--form">
        <form onSubmit={formik.handleSubmit}>
          <div className="payment--form__input">
            <div className="row">
                <TextField
                id="email"
                name="email"
                label="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <TextField
                id="name"
                name="name"
                label="Họ tên"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </div>
            <TextField
              id="address"
              name="address"
              label="Địa chỉ liên hệ"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.address}
            />
          </div>
          <div className="playment--form__button">
            <h1>2.000.000 vnđ</h1>
            <Button
              type="submit"
              className="submit--Btn"
              sx={{ padding: "1rem 2rem" }}
              variant="contained"
            >
              Đặt tour
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
