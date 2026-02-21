import SustainabilityHubBanner from '../components/SustainabilityHubBanner';
import FivePillarSection from '../components/FivePillarsSection';
import SustainabilityNumbers from '../components/SustainabilityNumbers'
import JourneyTimeline from '../components/JourneyTimeline'
import MissionSectionSustainabilityHub from '../components/MissionSectionSustainabilityHub';

const SustainabilityHub = () => {

    return (

        <>

            {/* Banner Section */}
            <div className='heroBannerContainer'>
                <SustainabilityHubBanner />
            </div>

            <div className="container">
                <FivePillarSection />
            </div>

              <div className="container-fluid">
                <SustainabilityNumbers />
            </div>

        <div className="container">
                <JourneyTimeline />
            </div>

        <div className="container-fluid">
                <MissionSectionSustainabilityHub/>
            </div>
            

        </>

    )


}
export default SustainabilityHub;
