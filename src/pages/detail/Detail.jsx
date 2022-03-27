import React, { useState, useEffect } from "react";
import LightBox from "../../components/lightBox/LightBox";
import { Button, TextField } from "@mui/material";
import { Input } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import calendar from "../../assets/svg/calendar.svg";
import numberPeople from "../../assets/svg/numberpeople.svg";

import "./detail.scss";
import SearchBox from "../../components/searchbox/SearchBox";
const Detail = () => {
  const [introductionOn, setIntroduction] = useState(true);
  const [numberGuest, setNumberGuest] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tourData = {
    id: "142",
    name: "Snow Forest",
    description: "Taste the cold and beauty of the Russian forest in winter.",
    location: "Camchatka, Russia",
    images: [
      "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg",
      "http://icdn.dantri.com.vn/zoom/1200_630/2017/hoa-1512436829540.jpg",
      "https://images.foxtv.com/static.fox13news.com/www.fox13news.com/content/uploads/2022/03/932/524/Ikebana-paper-flower-art-3.jpg?ve=1&tl=1",
      "https://images.foxtv.com/static.fox13news.com/www.fox13news.com/content/uploads/2022/03/932/524/Ikebana-paper-flower-art-3.jpg?ve=1&tl=1",
    ],
  };

  return (
    <div className="detail padding-section">
      <div className="tour--information">
        <div className="tour--information__lightBox">
          <LightBox images={tourData.images} />
        </div>
        <div className="tour--information__general">
          <h3>{tourData.name}</h3>
          <p>{tourData.description}</p>
          <p className="location">{tourData.location}</p>
          <div className="booktour--form">
            <div className="input--section">
              <div className="input date">
                <label>
                  <img src={calendar} alt="calendar.svg" />
                  Date
                </label>
                <DatePicker
                  wrapperClassName="datePicker"
                  dateFormat="dd/MM/yyyy"
                />
              </div>
              <div className="input numberGuest">
                <label>
                  <img src={numberPeople} alt="numberpeople.svg" />
                  People
                </label>
                <div className="numberGuest--input">
                  {numberGuest ? (
                    <Button
                      onClick={() => setNumberGuest(numberGuest - 1)}
                      variant="contained"
                      style={{
                        maxWidth: "30px",
                        maxHeight: "30px",
                        minWidth: "30px",
                        minHeight: "30px",
                      }}
                    >
                      -
                    </Button>
                  ) : (
                    <Button
                      onClick={() => setNumberGuest(numberGuest - 1)}
                      variant="outlined"
                      style={{
                        maxWidth: "30px",
                        maxHeight: "30px",
                        minWidth: "30px",
                        minHeight: "30px",
                      }}
                      disabled
                    >
                      -
                    </Button>
                  )}
                  <input
                    type="text"
                    value={numberGuest}
                    disabled
                    style={{ textAlign: "center", width: "50px" }}
                  />
                  <Button
                    onClick={() => setNumberGuest(numberGuest + 1)}
                    variant="contained"
                    style={{
                      maxWidth: "30px",
                      maxHeight: "30px",
                      minWidth: "30px",
                      minHeight: "30px",
                    }}
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>
            <Button
              sx={{
                width: "100%",
                padding: "1rem 0",
                boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.15)",
                borderRadius: "15px ",
                marginTop: "1rem",
              }}
              variant="contained"
            >
              Đặt Tour
            </Button>
          </div>
        </div>
      </div>

      <div className="tour--information__detail">
        <div className="button--section">
          {introductionOn ? (
            <>
              <Button onClick={() => setIntroduction(true)} variant="contained">
                Giới thiệu chung
              </Button>
              <Button onClick={() => setIntroduction(false)} variant="outlined">
                Lịch trình cụ thể
              </Button>
            </>
          ) : (
            <>
              <Button onClick={() => setIntroduction(true)} variant="outlined">
                Giới thiệu chung
              </Button>
              <Button
                onClick={() => setIntroduction(false)}
                variant="contained"
              >
                Lịch trình cụ thể
              </Button>
            </>
          )}
        </div>

        <div className="content">
          {introductionOn ? <h1>Giới thiệu chung</h1> : <h1>Lịch trình</h1>}
        </div>
      </div>
      <div className="recentViewed--container"></div>
      <div className="recommend--container"></div>
      <div></div>
    </div>
  );
};

export default Detail;
