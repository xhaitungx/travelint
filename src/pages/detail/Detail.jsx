import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LightBox from "../../components/lightBox/LightBox";
import { Button } from "@mui/material";
import DatePicker from "react-datepicker";
import { getDate, getMonth, getYear } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import PeopleIcon from "@mui/icons-material/People";
import calendar from "../../assets/svg/calendar.svg";
import numberPeople from "../../assets/svg/numberpeople.svg";
import "./detail.scss";
const Detail = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState("");
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
    date: ["28/3/2022", "29/3/2022", "30/3/2022"],
    images: [
      "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg",
      "http://icdn.dantri.com.vn/zoom/1200_630/2017/hoa-1512436829540.jpg",
      "https://images.foxtv.com/static.fox13news.com/www.fox13news.com/content/uploads/2022/03/932/524/Ikebana-paper-flower-art-3.jpg?ve=1&tl=1",
      "https://images.foxtv.com/static.fox13news.com/www.fox13news.com/content/uploads/2022/03/932/524/Ikebana-paper-flower-art-3.jpg?ve=1&tl=1",
    ],
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = {
      date: selectedDate,
      number: numberGuest,
    };
    navigate("/payment");
  };

  const navigate = useNavigate();

  return (
    <div className="detail padding-section">
      <div className="tour--information">
        <div className="tour--information__lightBox">
          <div className="numberOfTour">
            <p>3/40</p>
            {<PeopleIcon />}
          </div>
          <LightBox images={tourData.images} number={4} limit={8} />
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
                  highlightDates={tourData.date.map(
                    (date) => new Date(date.split("/").reverse().join())
                  )}
                  disabledKeyboardNavigation
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
                    id="numberGuest"
                    name="numberGuest"
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
            {tourData.date.includes(selectedDate) && numberGuest ? (
              <Button
                type="submit"
                sx={{
                  width: "100%",
                  padding: "1rem 0",
                  boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.15)",
                  borderRadius: "15px ",
                  marginTop: "1rem",
                }}
                onClick={handleSubmit}
                variant="contained"
              >
                Đặt Tour
              </Button>
            ) : (
              <Button
                type="submit"
                sx={{
                  width: "100%",
                  padding: "1rem 0",
                  boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.15)",
                  borderRadius: "15px ",
                  marginTop: "1rem",
                }}
                disabled
                variant="outlined"
              >
                Đặt Tour
              </Button>
            )}
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
