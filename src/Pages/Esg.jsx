import ComplianceSection from "../components/ComplianceSection";
import EsgBanner from "../components/EsgBanner";
import GovernanceSection from "../components/GovernanceSection";
import MissionSectionSustainabilityHub from "../components/MissionSectionSustainabilityHub";
import ResourceCenterSection from "../components/ResourceCenterSection";

const Esg = () => {

return (

    <>
    
 {/* Banner Section */}
            <div className='heroBannerContainer'>
                <EsgBanner />
            </div>

        <div className="container">

        <GovernanceSection />

        </div>

        <div className="container-fluid">

        <ComplianceSection />

        </div>

        <div className="container">

            <ResourceCenterSection />
        </div>

        
        <div className="container-fluid">
                <MissionSectionSustainabilityHub/>
            </div>

        

    </>
)

}
export default Esg;