import React, { useState } from "react";

import { TextField } from "@mui/material";
import "./accompanyInfor.scss";
const AccompanyInfor = ({ onShowLinkInput, setOnShowLink }) => {
  const numberGuest =
    JSON.parse(window.localStorage.getItem("bookTourInfor"))?.number - 1;
  const data = [];
  Array.from({ length: numberGuest }, (item, index) => {
    data.push({
      name: "",
      number: "",
    });
  });

  const handleChangeName = (e) => {
    const index = e.target.dataset.index;
    data[index].name = e.target.value;
    console.log(data);
  };

  const handleChangePhone = (e) => {
    const index = e.target.dataset.index;
    data[index].phone = e.target.value;
    console.log(data);
  };

  const renderFormAccompany = () => {
    return Array.from({ length: numberGuest }, (item, index) => (
      <div className="accompany--input">
        <h1>{index + 1}</h1>
        <TextField
          type="text"
          label="Họ và tên"
          sx={{ maxWidth: "200px" }}
          onBlur={handleChangeName}
          inputProps={{ "data-index": index }}
        />
        <TextField
          type="number"
          label="Số điện thoại"
          sx={{ maxWidth: "200px" }}
          onBlur={handleChangePhone}
          inputProps={{ "data-index": index }}
        />
      </div>
    ));
  };

  return (
    <div className="AccompanyInfor padding-section">
      {onShowLinkInput ? <div>LInk</div> : renderFormAccompany()}
    </div>
  );
};

export default AccompanyInfor;
