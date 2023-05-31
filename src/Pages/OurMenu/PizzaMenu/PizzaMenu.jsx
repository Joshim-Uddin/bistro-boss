import React, { useEffect, useState } from "react";
import Secondary from "../../../Shared/Secondary/Secondary";
import pizzaBg from "../../../assets/menu/pizza-bg.jpg";
import ItemsCard from "../../../Shared/itemsCard";
import { useFilter } from "../../../Hooks/useFilter";
import { Link } from "react-router-dom";

const PizzaMenu = () => {
  const pizzaItems = useFilter("pizza");
  return (
    <div>
      <Secondary
        img={pizzaBg}
        title="Pizza"
        details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <div className="grid grid-cols-2 gap-5 jar my-12">
        {pizzaItems.map((item) => (
          <ItemsCard key={item._id} item={item} />
        ))}
      </div>
      <div className="flex items-center justify-center my-8">
        <Link to="/ourfood">
          <button className="btn btn-outline border-t-0 border-l-0 border-r-0 border-2">
            Order Your Pizzas
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PizzaMenu;
