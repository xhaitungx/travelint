import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { TourCard } from "../../components";
import Cancel from "@mui/icons-material/Cancel";
import "./cardList.scss";
import axios from "axios";

const CardList = ({ DataTours }) => {
  const [toursData, setToursData] = useState([]);

  const [fetching, setFetching] = useState(true);
  useEffect(() => {
    axios
      .get("https://tour-api-dev.herokuapp.com/tour")
      .then((res) => res)
      .then((toursData) => {
        setToursData(toursData.data);
        setFetching(false);
      })
      .catch((error) => console.log(error));
  }, []);
  const navigate = useNavigate();
  const [params, setSearchParams] = useSearchParams();
  return (
    <>
      {params.get("category") ? (
        <div className="catergory--selected">
          <div onClick={() => navigate("/")}>
            <Cancel />
            <p>{params.get("category")}</p>
          </div>
        </div>
      ) : (
        <></>
      )}

      {fetching ? (
        <h1>Loading</h1>
      ) : (
        <div className="cardList">
          {toursData.map((tourData) => console.log(tourData.ten))}
          {toursData
            .filter((tourData) =>
              tourData.tags?.includes(params.get("category") || "")
            )
            .map((tourData) => (
              <TourCard tourData={tourData} />
            ))}
        </div>
      )}
    </>
  );
};

export default CardList;
