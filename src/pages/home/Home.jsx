import React from "react";
import { Banner } from "../../components";
import { CategoryList, CardList } from "../../container";

const Home = () => {
  return (
    <>
      <Banner />
      <CategoryList />
      <CardList />
    </>
  );
};

export default Home;
