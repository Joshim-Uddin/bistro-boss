import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import useCart from "../Hooks/useCart";

const FoodCard = ({ item }) => {
  const [, refetch] = useCart();
  const { user } = useContext(AuthContext);
  const { name, image, recipe, price, _id } = item;
  const handleAddToCart = () => {
    const email = user?.email;
    const cartItem = { name, image, price, email, itemId: _id };
    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(cartItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          console.log("added to cart");
          refetch();
        }
      });
  };
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="relative">
        <img src={image} alt="recipe" className="h-64 w-full" />
        <div className="absolute z-10 bg-black text-white px-3 py-1 rounded-lg top-3 right-4">
          {price}
        </div>
      </figure>
      <div className="card-body">
        <h2 className="text-xl text-center font-semibold">{name}</h2>

        <p className="text-center">{recipe}</p>

        <div className="card-actions justify-center">
          <button
            onClick={handleAddToCart}
            className="btn btn-outline border-l-0 border-t-0 border-r-0 border-2 border-yellow-500 text-yellow-500"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
