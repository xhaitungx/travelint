import { TextField } from "@mui/material";
import React, { useState, useEffect, useLayoutEffect, useContext } from "react";
import axios from "axios";
import { LoginContext } from "../../../../LoginContext";
const Account = () => {
  const [customerData, setCustomerData] = useState({});
  console.log(customerData);
  const customerID = useContext(LoginContext);

  useEffect(() => {
    axios(`https://tour-api-dev.herokuapp.com/khachhang/${customerID}`).then(
      ({ data }) => setCustomerData(data)
    );
  }, []);

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
    <>
      <p>Thông tin tài khoản</p>
      <div className="customer--account">
        <form>
          <TextField
            id="ho_ten"
            type="text"
            value={customerData.ho_ten || ""}
            name="name"
            onChange={handleChange}
            onBlur={handleUpdate}
            label="Họ tên"
          />

          <TextField
            id="sdt"
            type="text"
            value={customerData.sdt || ""}
            name="sdt"
            label="Số điện thoại"
            onChange={handleChange}
            onBlur={handleUpdate}
          />
          <TextField
            id="email"
            type="email"
            value={customerData.email || ""}
            name="email"
            label="email"
            onChange={handleChange}
            onBlur={handleUpdate}
          />
          <TextField
            id="dia_chi"
            type="text"
            value={customerData.dia_chi || ""}
            name="dia_chi"
            label="Địa chỉ"
            onChange={handleChange}
            onBlur={handleUpdate}
          />
        </form>
      </div>
    </>
  );
};

export default Account;
