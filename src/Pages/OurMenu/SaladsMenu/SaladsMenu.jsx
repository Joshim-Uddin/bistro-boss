import React, { useEffect, useState } from "react";
import Secondary from "../../../Shared/Secondary/Secondary";
import saladBg from "../../../assets/menu/salad-bg.jpg";
import ItemsCard from "../../../Shared/itemsCard";
import { useFilter } from "../../../Hooks/useFilter";
import { Link } from "react-router-dom";

const SaladsMenu = () => {
  const saladsItems = useFilter("salad");
  return (
    <div>
      <Secondary
        img={saladBg}
        title="Salads"
        details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <div className="grid grid-cols-2 gap-5 jar my-12">
        {saladsItems.map((item) => (
          <ItemsCard key={item._id} item={item} />
        ))}
      </div>
      <div className="flex items-center justify-center my-8">
        <Link to="/ourfood">
          <button className="btn btn-outline border-t-0 border-l-0 border-r-0 border-2">
            Order Your Salads
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SaladsMenu;
