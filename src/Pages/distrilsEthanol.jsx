import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EthanolHeroSection from '../components/EthanolHeroSection'
import AboutEthanol from '../components/AboutEthanol'
import IntegratedOptions from '../components/IntegratedOptions'
import CoreCapibilities from '../components/CoreCapibilities'
import ExpandingSliderEthanol from '../components/ExpandingSliderEthanol'
import Quality from '../components/Quality'
import SustainabilityCommitment from '../components/SustainabilityCommitment'
import GrowthFuture from '../components/GrowthFuture'
import AgeVerificationModal from "../components/AgeVerificationModal";

const DistrilsEthanol = () => {
  const [verified, setVerified] = useState(false);
  const navigate = useNavigate();

  const handleAccept = () => {
    setVerified(true);
  };

  const handleReject = () => {
    navigate("/");
  };

  return (
    <>
      {/* Blur Content When Not Verified */}
      <div className={!verified ? "blur-content" : ""}>
        <div className='heroBannerContainer'>
          <EthanolHeroSection />
        </div>

        <div className='container'>
          <AboutEthanol />
        </div>

        <div className='container'>
          <IntegratedOptions />
        </div>

        <div className="container">
          <CoreCapibilities />
        </div>

        <div className='ethanolExpandingSlider'>
          <ExpandingSliderEthanol />
        </div>

        <div className='qualitySafety container'>
          <Quality />
        </div>

        <div className='sustainabilityCommitment container my-5'>
          <SustainabilityCommitment />
        </div>

        <div className='container'>
          <GrowthFuture />
        </div>
      </div>

      {!verified && (
        <AgeVerificationModal
          onAccept={handleAccept}
          onReject={handleReject}
        />
      )}
    </>
  )
}

export default DistrilsEthanol