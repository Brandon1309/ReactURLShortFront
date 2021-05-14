import React from "react";
import { Input } from "semantic-ui-react";

const MainInput = ({ placeholder, handleChange }) => {
  return (
    <div className="input-cont">
      <Input
        fluid
        color="teal"
        handleChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default MainInput;
