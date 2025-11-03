import React from "react";
import InnerPageHead from "@/components/common/InnerPageHead";
import AboutUs from "@/components/about/AboutUs";

const About = () => {
  return (
    <>
      <InnerPageHead pageName="About" parentPage="Home" />
      <AboutUs />
    </>
  );
};

export default About;
