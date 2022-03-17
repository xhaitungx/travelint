import React, { useState } from "react";
import { Context } from "./Context.js";
import { Banner } from "../../components";
import { CategoryList, CardList } from "../../container";

const Home = () => {
  const [tag, setTag] = useState("");
  console.log(tag);
  return (
    <>
      <Context.Provider value={[tag, setTag]}>
        <Banner />
        <CategoryList setTag={setTag} />
        <CardList />
      </Context.Provider>
    </>
  );
};

export default Home;
