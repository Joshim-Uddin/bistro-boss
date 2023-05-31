import React, { useEffect, useState } from "react";
import SectionHeader from "../../../components/SectionHeader";
import ItemsCard from "../../../Shared/itemsCard";
import { useFilter } from "../../../Hooks/useFilter";
import { Link } from "react-router-dom";

const OfferMenu = () => {
  const offeredItems = useFilter("offered");
  return (
    <div className="jar">
      <SectionHeader heading="Today's offer" subHeading="Don't miss" />
      <div className="grid grid-cols-2 gap-5">
        {offeredItems.map((item) => (
          <ItemsCard key={item._id} item={item} />
        ))}
      </div>
      <div className="flex items-center justify-center my-8">
        <Link to="/ourfood">
          <button className="btn btn-outline border-t-0 border-l-0 border-r-0 border-2">
            Order Your Favorite Food
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OfferMenu;
