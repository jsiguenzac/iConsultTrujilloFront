import React from "react";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import RegisterSection from "./components/RegisterSection";

const WelcomeView = () => {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <RegisterSection />
    </>
  );
};

export default WelcomeView;
