import React, { useState } from "react";

import { TextField } from "@mui/material";
import "./accompanyInfor.scss";
const AccompanyInfor = ({
  onShowLinkInput,
  setOnShowLink,
  numberGuest,
  data,
}) => {
  const handleChangeName = (e) => {
    const index = e.target.dataset.index;
    data[index].ho_ten = e.target.value;
  };

  const handleChangePhone = (e) => {
    const index = e.target.dataset.index;
    data[index].sdt = e.target.value;
  };

  const renderFormAccompany = () => {
    return Array.from({ length: numberGuest }, (item, index) => (
      <div className="accompany--input">
        <h1>{index + 1}</h1>
        <TextField
          type="text"
          label="Họ và tên"
          sx={{ maxWidth: "200px" }}
          onChange={handleChangeName}
          inputProps={{ "data-index": index }}
        />
        <TextField
          type="number"
          label="Số điện thoại"
          sx={{ maxWidth: "200px" }}
          onChange={handleChangePhone}
          inputProps={{ "data-index": index }}
        />
      </div>
    ));
  };

  return (
    <div className="AccompanyInfor padding-section">
      {onShowLinkInput ? <div>Link</div> : renderFormAccompany()}
    </div>
  );
};

export default AccompanyInfor;
