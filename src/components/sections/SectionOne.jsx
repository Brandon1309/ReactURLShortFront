import React from "react";
import MainButton from "../MainButton";
import computer from "../../assets/computer.png";

const SectionOne = () => {
  return (
    <div className="section-one">
      <div className="col-1">
        <h1 className="section-one__title">More than just Shorter Links</h1>
        <h3 className="section-one__sub">
          Build your brands recognition and get detailed insights on how your
          links are performing
        </h3>

        <MainButton value="Get Started" />
      </div>
      <div className="col-2">
        <img src={computer} alt="image of computer" />
      </div>
    </div>
  );
};

export default SectionOne;
