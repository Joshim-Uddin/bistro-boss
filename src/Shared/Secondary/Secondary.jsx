import React from "react";

const Secondary = ({ img, title, details }) => {
  return (
    <div className="secondary">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="hero-content text-center py-16 textbox">
          <div className="max-w-xl p-3">
            <h1 className="mb-5 text-5xl font-bold uppercase title">{title}</h1>
            <p className="details mb-5">{details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secondary;
