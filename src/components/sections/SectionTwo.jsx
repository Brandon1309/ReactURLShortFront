import React from "react";
import CardComp from "../CardComponent/CardComp";

const SectionTwo = () => {
  return (
    <div className="section-two">
      <h2 className="section-two__title">Advanced Statistics</h2>
      <p className="section-two__desc">
        Track how your links are performing across the web with our advanced
        statistics dashboard
      </p>

      <div className="cards">
        <CardComp
          className="card"
          cardTitle="Brand Recognition"
          cardDescription="boost brand recognition with each click generic links dont mean a thing.
        Branded links will instill confidence in your content"
        />
        <CardComp
          cardTitle="Detailed Records"
          cardDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
        consequuntur ad itaque soluta explicabo cumque."
        />
        <CardComp
          cardTitle="Fully Customizable"
          cardDescription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis fugit
        porro deleniti! Ipsum cupiditate natus voluptatem."
        />
      </div>
    </div>
  );
};

export default SectionTwo;
