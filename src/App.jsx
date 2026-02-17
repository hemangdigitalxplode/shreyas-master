import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./Pages/home";
import FoodGrains from "./Pages/foodgrains";
import DistrilsEthanol from "./Pages/distrilsEthanol";
import PotableSpritis from "./Pages/potableSpritis";
import EnergyBioFuels from "./Pages/energyBiofuels";
import OurJourney from "./Pages/ourJourney";
import CarbonNeutralFace from "./Pages/carbonNeutralFace";
import FeedingTheWorld from "./Pages/feedingTheWorld";
import DeliveringPurity from "./Pages/deliveringPurity";
import PrecisionDistelleriesScalling from "./Pages/precisionDistelleriesScalling";
import Keyandistelleries from "./Pages/keyandistelleries";
import Pioneering from "./Pages/pioneering";
import Strength from "./Pages/Strength";
import EmpoweringEcosystem from "./Pages/empoweringEcosystem";

const App = () => {
  return (
    <div className="">

      {/* Header –*/}
      <BrowserRouter>
        <Header />
        {/* Routes */}
        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/food-grains" element={<FoodGrains />} />
            <Route path="/distrills-ethanol" element={<DistrilsEthanol />} />
            <Route path="/potable-spirits" element={<PotableSpritis />} />
            <Route path="/energy-biofuels" element={<EnergyBioFuels />} />
            <Route path="/our-journey" element={<OurJourney />} />
            <Route path="/powering-carbon-neutral-face" element={<CarbonNeutralFace />} />
            <Route path="/feeding-the-world" element={<FeedingTheWorld />} />
            <Route path="/delivery-purity" element={<DeliveringPurity />} />
            <Route path="/precision-distilling-at-scale" element={<PrecisionDistelleriesScalling />} />
            <Route path="/keyan-distelleries-pvt-ltd" element={<Keyandistelleries />} />
            <Route path="/fueling-the-future" element={<Pioneering />} />
            <Route path="/our-strength" element={<Strength />} />
            <Route path="/empowering-our-ecosystem" element={<EmpoweringEcosystem />} />
          </Routes>
        </main>
        {/* Footer – */}
        <Footer />

      </BrowserRouter>


    </div>
  );
};

export default App;
