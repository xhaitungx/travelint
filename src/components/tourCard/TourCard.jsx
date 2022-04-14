import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

import "./tourCard.scss";
const TourCard = ({ tourData }) => {
  return (
    <Link to={`/detail?slug=${tourData.slug}`}>
      <Card
        sx={{
          maxWidth: 261,
          borderRadius: 5,
          boxShadow: "0px 4px 45px -15px rgba(0, 0, 0, 0.15)",
        }}
      >
        <CardActionArea
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderRadius: "10px",
            padding: "1rem",
          }}
        >
          <CardMedia
            component="img"
            src={`http://tour-api-dev.herokuapp.com${tourData.hinh[0]}`}
            sx={{
              width: "100%",
              height: 160,
              filter: "drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.2))",

              borderRadius: "10px",
            }}
            alt=""
          />
          <div className="tourCard--Content">
            <h3>{tourData.ten}</h3>
            <p>{tourData.describe}</p>
            <div className="locationBox">
              <h3>Arizona, USA</h3>
              <h3>{tourData.gia}đ / person</h3>
            </div>
          </div>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default TourCard;
