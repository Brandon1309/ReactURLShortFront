import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SectionOne from "../../components/sections/SectionOne";
import SectionThree from "../../components/sections/SectionThree";
import SectionTwo from "../../components/sections/SectionTwo";
import ShortenLinkForm from "../../components/ShortenLinkForm";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <SectionOne />
      <ShortenLinkForm />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </div>
  );
};

export default HomePage;
