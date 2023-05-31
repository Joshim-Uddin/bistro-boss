import React from "react";
import Secondary from "../../../Shared/Secondary/Secondary";
import banner from "../../../assets/shop/banner2.jpg";
import FoodsTab from "../FoodsTab/FoodsTab";

const OurFood = () => {
  return (
    <div>
      <Secondary
        img={banner}
        title="Our Food"
        details="Would You like to try a Dish?"
      />
      <FoodsTab />
    </div>
  );
};

export default OurFood;
