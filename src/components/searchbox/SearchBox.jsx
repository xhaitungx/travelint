import React, { useState } from "react";

import "./searchBox.scss";
import { Autocomplete, TextField, Button } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SearchBox = () => {
  const [dataSearch, setDataSearch] = useState({
    location: "",
    date: new Date(),
    number: 0,
  });
  console.log(
    "🚀 ~ file: Searchbox.jsx ~ line 12 ~ Searchbox ~ date",
    dataSearch.date
  );

  console.log(
    "🚀 ~ file: Searchbox.jsx ~ line 15 ~ Searchbox ~ number",
    dataSearch.number
  );
  console.log(
    "🚀 ~ file: Searchbox.jsx ~ line 14 ~ Searchbox ~ location",
    dataSearch.location
  );

  const locations = ["Tokyo", "Osaka", "Hokaido"];

  const handleAddButton = () => {
    if (dataSearch.number < 20)
      setDataSearch({ number: dataSearch.number + 1 });
  };

  const handleSubtractButton = () => {
    if (dataSearch.number > 0) setDataSearch({ number: dataSearch.number - 1 });
  };

  const handleLocationText = (e) => {
    console.log(e.target.value);
  };

  const handleSearchButton = (e) => {
    console.log(e.target);
  };

  return (
    <div className="searchBox">
      <div className="searchform">
        <div className="inputField">
          <label>Location</label>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={locations}
            sx={{ width: "80%" }}
            renderInput={(params) => (
              <TextField
                {...params}
                name="location"
                size="medium"
                variant="standard"
                placeholder="Nhập địa điểm"
                onChange={handleLocationText}
              />
            )}
          />
        </div>
        <div className="inputField">
          <label>Địa chỉ</label>
          <DatePicker
            placeholderText="Chọn ngày"
            selected={dataSearch.date}
            onChange={(date) => setDataSearch({ date: date })}
          />
        </div>

        <div className="inputNumber">
          <label>Người</label>
          <div className="inputNumber-group">
            {dataSearch.number ? (
              <Button onClick={handleSubtractButton}>-</Button>
            ) : (
              <Button disabled onClick={handleSubtractButton}>
                -
              </Button>
            )}
            {dataSearch.number ? (
              <input
                type="text"
                placeholder="Thêm số người"
                value={dataSearch.number}
                readOnly
              />
            ) : (
              <input
                type="text"
                placeholder="Thêm số người"
                value={dataSearch.number}
                readOnly
              />
            )}
            <Button onClick={handleAddButton}>+</Button>
          </div>
        </div>
        <div className="button-search">
          <Button onClick={handleSearchButton}>Tìm</Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
