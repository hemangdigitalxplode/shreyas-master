import GreenBanner from "../components/GreenBanner";
import PlasticNeutrality from "../components/PlasticNeutrality"
import WasteToWealth from "../components/WasteToWealth";
import WaterStewardhip from "../components/WaterStewardhip";
import MissionSectionSustainabilityHub from '../components/MissionSectionSustainabilityHub';


const GreenInitiatives = () => {

      return (

            <>

                  <div className='heroBannerContainer'>
                        <GreenBanner />
                  </div>

                  <div className='container'>
                        <PlasticNeutrality />
                  </div>

                  <div className='container-fluid'>
                        <WasteToWealth />
                  </div>

                  <div className='container'>
                        <WaterStewardhip />
                  </div>

                  <div className="container-fluid">
                        <MissionSectionSustainabilityHub />
                  </div>

            </>

      )

}

export default GreenInitiatives;