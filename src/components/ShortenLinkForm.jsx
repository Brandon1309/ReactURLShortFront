import React, { useState } from "react";
import MainInput from "./MainInput";
import MainButton from "./MainButton";
import axios from "axios";
const ShortenLinkForm = () => {
  const [urlShorten, setUrlShorten] = useState(null);
  const [urlInput, setUrlInput] = useState(null);

  const handleChange = (e) => {
    setUrlInput(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    const getUrl = async () => {
      try {
        console.log("api called");
        const res = await axios.get(
          `https://api.shrtco.de/v2/shorten?url=${urlInput}`
        );
        setUrlShorten(res.data);
      } catch (e) {
        console.log("there was an error");
      }
    };
    getUrl();
  };
  return (
    <div>
      <form className="shorten-link-form">
        <MainInput
          placeholder="Add your URL here"
          className="shorten-link-form__input"
          type="text"
          handleChange={handleChange}
        />
        <MainButton
          className="shorten-link-form__btn"
          onClick={handleClick}
          value="Shorten it"
          type="submit"
        />
      </form>
    </div>
  );
};

export default ShortenLinkForm;
