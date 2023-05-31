import React from "react";
import SectionHeader from "../../../components/SectionHeader";
import featured from "../../../assets/home/featured.jpg";
import moment from "moment/moment";
import { Parallax } from "react-parallax";

const Featured = () => {
  return (
    <Parallax bgImage={featured} strength={500} className="mix-blend-multiply">
      <div className="jar text-white my-20 py-5">
        <SectionHeader heading="From Our Menu" subHeading="Check it out" />
        <div className="flex w-10/12 gap-10  items-center justify-center mx-auto">
          <img src={featured} alt="" className="w-[400px]" />
          <div>
            <p>{moment().format("MMM D, YYYY")}</p>
            <h6>WHERE CAN I GET SOME?</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn btn-outline border-l-0 border-t-0 border-r-0 border-2 border-slate-50 text-white">
              Read More
            </button>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Featured;
