import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { Button } from "@mui/material";
import {
  WizzardHeader,
  UserInfor,
  AccompanyInfor,
} from "./paymentContent/index";
import "./paymentContent.scss";
const PaymentContent = () => {
  const [onShowLinkInput, setOnShowLinkInput] = useState(false);
  const [activedStep, setActivedStep] = useState(0);

  const handleButtonBack = () => {
    setActivedStep(activedStep - 1);
  };

  const handleButtonNext = () => {
    setActivedStep(activedStep + 1);
  };

  const handleChange = (index) => {
    setActivedStep(index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
  };

  return (
    <div className="pagementContent">
      <h1>Thanh toán</h1>
      <WizzardHeader />
      <form className="pagementContent.form" onSubmit={handleSubmit}>
        <SwipeableViews index={activedStep} onChangeIndex={handleChange}>
          <UserInfor />
          <AccompanyInfor
            onShowLinkInput={onShowLinkInput}
            setOnShowLink={setOnShowLinkInput}
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
          <Button onClick={handleButtonNext} variant="contained">
            Tiếp tục
          </Button>

          <button type="submit"> submit</button>
        </div>
      </form>
    </div>
  );
};

export default PaymentContent;
