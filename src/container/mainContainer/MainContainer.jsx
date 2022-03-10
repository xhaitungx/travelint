import React, { useState, useEffect } from "react";
import CardList from "../cardList/CardList";
import CategoryList from "../categoryList/CategoryList";

const MainContainer = () => {
  const [tourData, setTourData] = useState([]);

  return (
    <div>
      <CategoryList></CategoryList>
      <CardList></CardList>
    </div>
  );
};

export default MainContainer;
