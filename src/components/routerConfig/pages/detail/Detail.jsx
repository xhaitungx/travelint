import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { TourHead, TourDetail } from "../../container";

import "./detail.scss";
import axios from "axios";

const Detail = () => {
  const [tourData, setTourData] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    fetchDetailTour();
  }, []);

  const fetchDetailTour = () => {
    const slug = searchParams.get("slug");
    axios(`https://tour-api-dev.herokuapp.com/tour/${slug}`)
      .then(({ data }) => {
        data.map((tour) => setTourData(tour));
      })
      .catch((error) => console.error(error));
  };

  // const tourData = {
  //   id: "142",
  //   name: "Snow Forest",
  //   description: "Taste the cold and beauty of the Russian forest in winter.",
  //   location: "Camchatka, Russia",
  //   date: ["28/3/2022", "29/3/2022", "30/3/2022"],
  //   images: [
  //     "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg",
  //     "http://icdn.dantri.com.vn/zoom/1200_630/2017/hoa-1512436829540.jpg",
  //     "https://images.foxtv.com/static.fox13news.com/www.fox13news.com/content/uploads/2022/03/932/524/Ikebana-paper-flower-art-3.jpg?ve=1&tl=1",
  //     "https://images.foxtv.com/static.fox13news.com/www.fox13news.com/content/uploads/2022/03/932/524/Ikebana-paper-flower-art-3.jpg?ve=1&tl=1",
  //   ],
  // };

  return (
    <div className="detail padding-section">
      <TourHead tourData={tourData} />
      <TourDetail tourData={tourData} />
      <div className="recentViewed--container"></div>
      <div className="recommend--container"></div>
      <div></div>
    </div>
  );
};

export default Detail;
