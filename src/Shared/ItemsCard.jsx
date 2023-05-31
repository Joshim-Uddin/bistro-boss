import React from "react";

const ItemsCard = ({ item }) => {
  return (
    <div className="flex gap-3">
      <img
        src={item.image}
        alt=""
        className="w-24 h-24"
        style={{ borderRadius: "0px 200px 200px 200px" }}
      />
      <div>
        <h3>{item.name} ------------------</h3>
        <p>{item.recipe}</p>
      </div>
      <p className="text-yellow-500">${item.price}</p>
    </div>
  );
};

export default ItemsCard;
