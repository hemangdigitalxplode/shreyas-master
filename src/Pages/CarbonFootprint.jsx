import CarbonFootprintBanner from "../components/CarbonFootprintBanner"
import SmartLogistics from "../components/SmartLogistics";
import EnergyEfficientMachinery from "../components/EnergyEfficientMachinery";
import CarbonOffsetSection from "../components/CarbonOffsetSection";
import CarbonFootprintJourney from "../components/CarbonFootprintJourney";
import MissionSectionSustainabilityHub from "../components/MissionSectionSustainabilityHub";

const CarbonFootprint = () => {

    return (

        <>
            {/* Banner Section */}
            <div className='heroBannerContainer'>
                <CarbonFootprintBanner />
            </div>


            <div className='container'>
                <SmartLogistics />
            </div>

            <div className='container-fluid'>
                <EnergyEfficientMachinery />
            </div>

            <div className='container'>
                <CarbonOffsetSection />
            </div>

            <div className="container-fluid d-none">
                <CarbonFootprintJourney></CarbonFootprintJourney>

            </div>

            <div className="container-fluid">
                <MissionSectionSustainabilityHub />
            </div>


        </>
    )

}
export default CarbonFootprint;