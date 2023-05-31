import React from "react";

const SectionHeader = ({ subHeading, heading }) => {
  return (
    <div className="my-8 w-1/3 mx-auto text-center">
      <p className="text-yellow-500 mb-3">---{subHeading}---</p>
      <h3 className="border-t-2 border-b-2 py-4 text-3xl uppercase">
        {heading}
      </h3>
    </div>
  );
};

export default SectionHeader;
