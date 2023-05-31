import React, { useEffect, useState } from "react";
import SectionHeader from "../../../components/SectionHeader";
import ItemsCard from "../../../Shared/itemsCard";
import { useFilter } from "../../../Hooks/useFilter";
import { Link, Navigate } from "react-router-dom";

const PopularMenu = () => {
  const items = useFilter("popular");
  return (
    <div className="my-12">
      <SectionHeader
        subHeading={"Check it out"}
        heading={"From our Popular menu"}
      />
      <div className="jar grid grid-cols-2 gap-8">
        {items.map((item) => (
          <ItemsCard key={item._id} item={item} />
        ))}
      </div>
      <div className="flex items-center justify-center my-8">
        <Link to="/menu">
          <button className="btn btn-outline border-t-0 border-l-0 border-r-0 border-2">
            View Full Menu
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularMenu;
