import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import { LoginContext } from "../../LoginContext";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

import { getDate, getMonth, getYear } from "date-fns";
import ButtonCustom from "../../components/buttonCustom/ButtonCustom";
import { useNavigate } from "react-router-dom";
import { MuiFbPhotoGrid } from "mui-fb-photo-grid";
import PeopleIcon from "@mui/icons-material/People";
import { calendar, numberpeople, location } from "../../assets/svg";
import "./tourHead.scss";
const TourHead = ({ tourData }) => {
  const customerID = useContext(LoginContext);

  const [numberGuest, setNumberGuest] = useState(0);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const sumCost = (cost, numberGuest) => {
      const formatVND = (value) => {
        value = value.toLocaleString("it-IT", {
          style: "currency",
          currency: "VND",
        });
        return value.replaceAll("VND", "").trim();
      };

      const sum = parseInt(cost.replaceAll(".", "")) * numberGuest;
      return formatVND(sum);
    };

    const infor = {
      id: tourData["_id"],
      img: tourData.hinh[0],
      name: tourData.ten,
      gia: sumCost(tourData.gia, numberGuest),
      date: tourData.khoi_hanh,
      number: numberGuest,
      du_khach: tourData.du_khach,
    };

    const bookTourData = {
      id_khach_hang: customerID,
      id_tour: tourData["_id"],
      giam_gia: "10%",
      thanh_tien: sumCost(tourData.gia, numberGuest),
      phuong_thuc_tt: "Chia kỳ",
      ky_thanh_toan: [],
      trang_thai_duyet: "Chưa duyệt",
    };

    if (customerID) {
      axios
        .post("https://tour-api-dev.herokuapp.com/thanhtoan", bookTourData)
        .catch((err) => console.log(err));

      window.localStorage.setItem("bookTourInfor", JSON.stringify(infor));
      navigate("/payment");
    } else window.location.href = "/login";
  };

  function getImage(dataImage) {
    const imageArray = [];
    dataImage?.map((imageURL) =>
      imageArray.push({
        title: "...", // require
        img: `http://tour-api-dev.herokuapp.com${imageURL}`, // require
        imgThumbnail: `http://tour-api-dev.herokuapp.com${imageURL}`, // optional
      })
    );
    return imageArray;
  }

  const IMAGES = getImage(tourData.hinh);

  const buttonUpDownStyle = {
    maxWidth: "30px",
    maxHeight: "30px",
    minWidth: "30px",
    minHeight: "30px",
  };

  const buttonSubmitStyle = {
    width: "100%",
    padding: "1rem 0",
    boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.15)",
    borderRadius: "15px ",
    marginTop: "1rem",
  };

  const handleClickAdd = () => {
    setNumberGuest(numberGuest + 1);
  };

  const handleClickSubtract = () => {
    setNumberGuest(numberGuest - 1);
  };

  const handleClickSubmit = () => {
    console.log("submit");
  };

  return (
    <>
      <div className="tour--information">
        <div className="tour--information__lightBox">
          <div className="numberOfTour">
            <p>
              {tourData.du_khach?.length || 0}/{tourData.so_cho}
            </p>
            {<PeopleIcon />}
          </div>
          <MuiFbPhotoGrid
            style={{ height: "250px" }}
            sx={{ height: "250px" }}
            images={IMAGES} // require
            reactModalStyle={{ overlay: { zIndex: 2000 } }} // optional (https://github.com/reactjs/react-modal#styles)
          />
          {/* <LightBox images={tourData.hinh} /> */}
        </div>
        <div className="tour--information__general">
          <h3>{tourData.ten}</h3>
          <p>{tourData.description}</p>
          {/* {tourData.location} */}
          <div className="location">
            <img src={location} style={{ width: "24px" }} alt="location.svg" />
            <span>Tokyo, Minato</span>
          </div>
          <p style={{ marginLeft: "1rem" }}>{tourData.gia} đ</p>
          <div className="booktour--form">
            <div className="input--section">
              <div className="input date">
                <label>
                  <img src={calendar} alt="calendar.svg" />
                  Date
                </label>
                {/* <DatePicker
                  dateFormat="dd/MM/yyyy"
                  selected={date}
                  onChange={(date) => {
                    setDate(date);
                    const day = getDate(date);
                    const month = getMonth(date) + 1;
                    const year = getYear(date);
                    setSelectedDate(`${day}/${month}/${year}`);
                  }}
                  minDate={new Date()}
                  wrapperClassName="datePicker"
                  // highlightDates={tourData.date.map(
                  //   (date) => new Date(date.split("/").reverse().join())
                  // )}
                  disabledKeyboardNavigation
                /> */}
                <div>{tourData.khoi_hanh}</div>
              </div>
              <div className="input numberGuest">
                <label>
                  <img src={numberpeople} alt="numberpeople.svg" />
                  People
                </label>
                <div className="numberGuest--input">
                  {numberGuest ? (
                    <ButtonCustom
                      nameString="-"
                      style={buttonUpDownStyle}
                      variant="contained"
                      customFunction={handleClickSubtract}
                    />
                  ) : (
                    <ButtonCustom
                      nameString="-"
                      style={buttonUpDownStyle}
                      variant="outlined"
                      disabled={true}
                    />
                  )}
                  <input
                    id="numberGuest"
                    name="numberGuest"
                    type="text"
                    value={numberGuest}
                    style={{ textAlign: "center", width: "50px" }}
                  />

                  {numberGuest <
                  parseInt(tourData.so_cho - tourData.du_khach?.length || 0) ? (
                    <ButtonCustom
                      nameString="+"
                      style={buttonUpDownStyle}
                      variant="contained"
                      customFunction={handleClickAdd}
                    />
                  ) : (
                    <ButtonCustom
                      nameString="+"
                      style={buttonUpDownStyle}
                      variant="outlined"
                      disabled={true}
                    />
                  )}
                </div>
              </div>
            </div>
            {
              /*tourData.date.includes(selectedDate) &&*/ numberGuest ? (
                <ButtonCustom
                  type="Submit"
                  nameString="Đặt Tour"
                  variant="contained"
                  style={buttonSubmitStyle}
                  customFunction={handleSubmit}
                />
              ) : (
                <ButtonCustom
                  type="Submit"
                  nameString="Chọn số người tham gia"
                  variant="contained"
                  style={buttonSubmitStyle}
                  disabled={true}
                />
              )
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default TourHead;
