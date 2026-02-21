import BioEnergyPowering from "../components/BioEnergyPowering";
import MissionSectionSustainabilityHub from "../components/MissionSectionSustainabilityHub";
import PathToHundred from "../components/PathToHundred";
import PoweringCarbonNeutralBanner from "../components/PoweringCarbonNeutralBanner";
import SolarCapacityPowering from "../components/SolarCapacityPowering";

const PoweringCarbonNeutral = () => {


    return (

        <>

            <div className='heroBannerContainer'>
                <PoweringCarbonNeutralBanner />
            </div>

            <div className="container">

                <SolarCapacityPowering />

            </div>

            <div className="container-fluid">

                <BioEnergyPowering />

            </div>

            <div className="container">

                <PathToHundred />

            </div>

            <div className="container-fluid">
                <MissionSectionSustainabilityHub />
            </div>


        </>
    )


}
export default PoweringCarbonNeutral;