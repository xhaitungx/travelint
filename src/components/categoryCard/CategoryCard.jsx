import React, { useState } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ dataTour }) => {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(`?category=${dataTour.label}`)}
      sx={{
        maxWidth: 125,
        borderRadius: "10px",
        boxShadow: "none",
        background: "#F9FBFF",
      }}
    >
      <CardActionArea
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          borderRadius: "10px",
        }}
      >
        <CardMedia
          component="img"
          image={dataTour.imageURL}
          sx={{
            width: "100%",
            height: "195px",
            filter: "drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.2))",

            borderRadius: "10px",
          }}
          alt=""
        />
        <CardContent>
          <button onClick={() => navigate(`?category=${dataTour.label}`)} />
          <Typography
            sx={{ fontWeight: 800, fontSize: "16px", lineHeight: "22px" }}
          >
            {dataTour.label}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CategoryCard;
