import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { TourCard } from "../../components";
import Cancel from "@mui/icons-material/Cancel";
import "./cardList.scss";
const DataToursTest = [
  {
    id: "0123",
    name: "Tokyo",
    describe: "Thành phố",
    urlImage: "",
    type: "mountain",
    price: 7000000,
  },
  {
    id: "1293",
    name: "Tokyo",
    describe: "Thành phố",
    urlImage: "",
    type: "mountain",
    price: 7000000,
  },
  {
    id: "1213",
    name: "Tokyo",
    describe: "Thành phố",
    urlImage: "",
    price: 7000000,
    type: "beach",
  },
  {
    id: "1233",
    name: "e",
    describe: "Thành phố",
    urlImage: "",
    type: "mountain",
    price: 7000000,
  },
  {
    id: "1283",
    name: "d",
    describe: "Thành phố",
    urlImage: "",
    price: 7000000,
    type: "Mountain",
  },
  {
    id: "1723",
    name: "c",
    describe: "Thành phố",
    urlImage: "",
    type: "Tokyo",
    price: 7000000,
  },
  {
    id: "1243",
    name: "b",
    describe: "Thành phố",
    urlImage: "",
    price: 7000000,
    type: "Beach",
  },
  {
    id: "123",
    name: "a",
    describe: "Thành phố",
    urlImage: "",
    price: 7000000,
    type: "Temple",
  },
];

const CardList = ({ DataTours }) => {
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

      <div className="cardList">
        {DataToursTest.filter((tourData) =>
          tourData.type?.includes(params.get("category") || "")
        ).map((tourData) => (
          <TourCard tourData={tourData} key={tourData.id} />
        ))}
      </div>
    </>
  );
};

export default CardList;
