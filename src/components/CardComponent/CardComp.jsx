import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import computer from "../../assets/computer.png";
import "./CardStyles.scss";

const CardComp = ({ cardTitle, cardDescription }) => {
  return (
    <div>
      <Card className="whole-card">
        {/* <Image src={computer} /> */}
        <Card.Content className="header">
          <h1>{cardTitle}</h1>
        </Card.Content>
        <Card.Content description={cardDescription} className="description" />
      </Card>
    </div>
  );
};

export default CardComp;
