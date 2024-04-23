import { WiMoonAltNew } from "react-icons/wi";
import { WiMoonWaningGibbous1 } from "react-icons/wi";
import { WiMoonThirdQuarter } from "react-icons/wi";
import { WiMoonWaningCrescent4 } from "react-icons/wi";
import { WiMoonWaningCrescent3 } from "react-icons/wi";
import { WiMoonWaningCrescent2 } from "react-icons/wi";
import { WiMoonWaningCrescent1 } from "react-icons/wi";
import { WiMoonAltWaxingCrescent1 } from "react-icons/wi";
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import { WiMoonAltWaxingGibbous2 } from "react-icons/wi";
import { WiMoonAltWaxingCrescent5 } from "react-icons/wi";
import { WiMoonAltWaxingCrescent3 } from "react-icons/wi";
import { WiMoonWaningGibbous2 } from "react-icons/wi";
import { WiMoonWaxingCrescent1 } from "react-icons/wi";
import './App.css';

function App() {
  return (
    <>
    <h1 className="ml-4 text-base font-bold text-center my-4">15 Phases Of Moons</h1>
    <div className="h-4 w-22 flex flex-row flex-wrap justify-center items-center ">
      
      <div className='m-5'>
        <h1 className="ml-4 text-base font-medium">Phase 1</h1>
        <WiMoonAltNew size={80}/>
      </div>
      <div className='m-5'>
      <h1 className="ml-4 text-base font-medium">Phase 2</h1>
        <WiMoonWaningGibbous1 size={80}/>
      </div>
      <div className='m-5'>
      <h1 className="ml-4 text-base font-medium">Phase 3</h1>
        <WiMoonThirdQuarter  size={80}/>
      </div>
      <div className='m-5'>
      <h1 className="ml-4 text-base font-medium">Phase 4</h1>
        <WiMoonWaningCrescent4   size={80}/>
      </div>
      <div className='m-5'>
      <h1 className="ml-4 text-base font-medium">Phase 5</h1>
        <WiMoonWaningCrescent3   size={80}/>
      </div>
      <div className='m-5'>
      <h1 className="ml-4 text-base font-medium">Phase 6</h1>
        <WiMoonWaningCrescent2   size={80}/>
      </div>
      <div className='m-5'>
      <h1 className="ml-4 text-base font-medium">Phase 7</h1>
        <WiMoonWaningCrescent1   size={80}/>
      </div>
      <div className='m-5'>
      <h1 className="ml-4 text-base font-medium">Phase 8</h1>
        <WiMoonAltWaxingCrescent1  size={80}/>
      </div>
      <div className='m-5'>
      <h1 className="ml-4 text-base font-medium">Phase 9</h1>
        <WiMoonAltThirdQuarter  size={80}/>
      </div>
      <div className='m-5'>
      <h1 className="ml-4 text-base font-medium">Phase 10</h1>
        <WiMoonAltWaxingGibbous2 size={80}/>
      </div>
      <div className='m-5'>
      <h1 className="ml-4 text-base font-medium">Phase 11</h1>
        <WiMoonAltWaxingCrescent5  size={80}/>
      </div>
      <div className='m-5'>
      <h1 className="ml-4 text-base font-medium">Phase 12</h1>
        <WiMoonAltWaxingCrescent3  size={80}/>
      </div>
      <div className='m-5'>
      <h1 className="ml-4 text-base font-medium">Phase 13</h1>
        <WiMoonWaningGibbous1  size={80}/>
      </div>
      <div className='m-5'>
      <h1 className="ml-4 text-base font-medium">Phase 14</h1>
        <WiMoonWaningGibbous2   size={80}/>
      </div>
      <div className='m-5'>
      <h1 className="ml-4 text-base font-medium">Phase 15</h1>
        <WiMoonWaxingCrescent1  size={80}/>
      </div>
    </div>
    </>
  );
}

export default App;
