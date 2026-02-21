import StrengthHero from '../components/StrengthHero';
import ProcessSectionStrength from '../components/ProcessSectionStrength';
import PortfolioStrength from '../components/PortfolioStrength';
import TechnicalSecStrength from '../components/TechnicalSecStrength';
import TestingLaboratoryStrength from '../components/TestingLaboratoryStrength';
import RenewalStrength from '../components/RenewalStrength';

const Strength = () => {

return(

<>

{/* Banner Section */}
 <div className='heroBannerContainer'>
<StrengthHero />
 </div>

{/* Process Section */}

<div className="container">
<ProcessSectionStrength />
</div>


<div className="container-fluid">
<PortfolioStrength />
</div>

<div className="container">
<TechnicalSecStrength />
</div>

<div className="container-fluid">
<TestingLaboratoryStrength />
</div>


<div className="container-fluid">
<RenewalStrength />
</div>


</>

)

}

export default Strength;