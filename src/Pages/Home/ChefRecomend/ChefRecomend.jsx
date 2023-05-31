import React from "react";
import SectionHeader from "../../../components/SectionHeader";
import img from "./../../../assets/home/slide5.jpg";

const ChefRecomend = () => {
  return (
    <div className="jar my-12">
      <SectionHeader subHeading={"Should Try"} heading={"CHEF RECOMMENDS"} />
      <div className="grid grid-cols-3 gap-4">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={img} alt="recipe" className="h-64 w-full" />
          </figure>
          <div className="card-body">
            <h2 className="text-2xl text-center font-semibold">Caeser Salad</h2>

            <p className="text-center">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>

            <div className="card-actions justify-center">
              <button className="btn btn-outline border-l-0 border-t-0 border-r-0 border-2 border-yellow-500 text-yellow-500">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={img} alt="recipe" className="h-64 w-full" />
          </figure>
          <div className="card-body">
            <h2 className="text-2xl text-center font-semibold">Caeser Salad</h2>

            <p className="text-center">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>

            <div className="card-actions justify-center">
              <button className="btn btn-outline border-l-0 border-t-0 border-r-0 border-2 border-yellow-500 text-yellow-500">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={img} alt="recipe" className="h-64 w-full" />
          </figure>
          <div className="card-body">
            <h2 className="text-2xl text-center font-semibold">Caeser Salad</h2>

            <p className="text-center">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>

            <div className="card-actions justify-center">
              <button className="btn btn-outline border-l-0 border-t-0 border-r-0 border-2 border-yellow-500 text-yellow-500">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecomend;
