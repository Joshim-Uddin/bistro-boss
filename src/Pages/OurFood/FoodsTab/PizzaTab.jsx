import React from "react";
import { useFilter } from "../../../Hooks/useFilter";
import FoodCard from "../../../Shared/FoodCard";

const PizzaTab = () => {
  const saladsItems = useFilter("salad");
  return (
    <div className="grid grid-cols-3 gap-4 my-12">
      {saladsItems.map((item) => (
        <FoodCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default PizzaTab;
