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
const TourCard = ({ imageURL, tourData }) => {
  return (
    <Link to="/detail">
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
            image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmlldG5hbSUyMGJlYWNofGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            sx={{
              width: "100%",
              height: 160,
              filter: "drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.2))",

              borderRadius: "10px",
            }}
            alt=""
          />
          <div className="tourCard--Content">
            <h3>{tourData.name}</h3>
            <p>{tourData.describe}</p>
            <div className="locationBox">
              <h3>Arizona, USA</h3>
              <h3>150 / person</h3>
            </div>
          </div>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default TourCard;
