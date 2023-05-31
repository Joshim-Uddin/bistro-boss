import React from "react";
import { useFilter } from "../../../Hooks/useFilter";
import FoodCard from "../../../Shared/FoodCard";

const DrinksTab = () => {
  const drinksItems = useFilter("drinks");
  return (
    <div className="grid grid-cols-3 gap-4 my-12">
      {drinksItems.map((item) => (
        <FoodCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default DrinksTab;
