import React from "react";
import HeroSection from "../components/pioneering/HeroSection";
import DistillationSolutionsSection from "../components/pioneering/DistillationSolutionsSection";
import WasteToWealthSection from "../components/pioneering/WasteToWealthSection";
import TechnologyShowcase from "../components/pioneering/TechnologyShowcase";
import EnergyNexusSection from "../components/pioneering/EnergyNexusSection";
import StatsBar from "../components/pioneering/StatsBar";


const Pioneering = () => {
  return (
    <>
      <HeroSection/>
      <EnergyNexusSection/>
      <StatsBar/>
      <DistillationSolutionsSection/>
       <TechnologyShowcase/>
      <WasteToWealthSection/>
     
    </>
  );
};

export default Pioneering;
