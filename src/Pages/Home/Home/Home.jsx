import React from "react";
import Banner from "../Banner/Banner";
import Slider from "../Slider/Slider";
import Secondary from "../../../Shared/Secondary/Secondary";
import Menu from "../PopularMenu/PopularMenu";
import Number from "../../../components/Number";
import ChefRecomend from "../ChefRecomend/ChefRecomend";
import FromMenu from "../Featured/Featured";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import secondary from "../../../assets/home/chef-service.jpg";
import PopularMenu from "../PopularMenu/PopularMenu";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Banner />
      <Slider />
      <Secondary
        img={secondary}
        title="Bistro Boss"
        details="Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi."
      />
      <PopularMenu />
      <Number />
      <ChefRecomend />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
