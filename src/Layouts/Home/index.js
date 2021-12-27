import React,{useEffect} from "react";
import Header from "./Header";
import Properties from "./Properties";
import Work from "./Work";
import Offers from "./Offers";
import News from "./News";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

  }, [])
  return (
    <>
      <Header />
      <Properties />
      <Work />
      <Offers />
      <News />
    </>
  );
};
export default Home;
