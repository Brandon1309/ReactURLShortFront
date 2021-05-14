import React from "react";
import { Button } from "semantic-ui-react";

const MainButton = ({ value, onClick }) => {
  return (
    <div className="main-btn">
      <Button color="teal" onClick={onClick} content={value} />
    </div>
  );
};

export default MainButton;
