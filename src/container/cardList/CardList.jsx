import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import { TourCard } from "../../components";
import Cancel from "@mui/icons-material/Cancel";
import "./cardList.scss";
import axios from "axios";

const CardList = ({ DataTours }) => {
  const [toursData, setToursData] = useState([]);
  const [tag, setTag] = useState("");
  const [pageIndex, setPageIndex] = useState(0);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    // axios
    //   .get("https://tour-api-dev.herokuapp.com/tour")
    //   .then((res) => res)
    //   .then((toursData) => {
    //     setToursData(toursData.data);
    //     setFetching(false);
    //   })
    //   .catch((error) => console.log(error));
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
          {toursData
            .filter((tourData) =>
              tourData.tags?.includes(params.get("category") || "")
            )
            .map((tourData, item) => (
              <TourCard tourData={tourData} key={item} />
            ))}
        </div>
      )}
    </>
  );
};

export default CardList;
