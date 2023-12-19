import React  , {useState}from "react"

import Languageoption from '../components/language-dropdown'
import {useTranslation} from 'react-i18next'
import i18next from "i18next"

const pickupPoints = {
    '1': 'Pickup Point A',
    '2': 'Pickup Point B',
    '3': 'Pickup Point C',
  };

const Home = () => {
    const [selectedCounty, setSelectedCounty] = useState('');
  const [pickupPoint, setPickupPoint] = useState('');

  const handleCountyChange = (event) => {
    const countyId = event.target.value;
    setSelectedCounty(countyId);
    // Fetch pickup point based on the county ID
    const selectedPickupPoint = pickupPoints[countyId];
    setPickupPoint(selectedPickupPoint);
  };

    const {t} = useTranslation();
    const handleClick=(e)=>{
        i18next.changeLanguage(e.target.value)
    }
    return(

        <>
        <div style={{marginTop:'50px'}}>
        
            <Languageoption onChange={(e)=> handleClick(e)}/>
            <h1>{t('benifit_title1')} {t('first_benefit.heading')} || React {t('holiday')} Developer</h1>
            </div>


        <div>
        <label htmlFor="countySelect">Select a county: </label>
        <select id="countySelect" onChange={handleCountyChange}>
          <option value="">Select</option>
          <option value="1">County 1</option>
          <option value="2">County 2</option>
          <option value="3">County 3</option>
        </select>
  
        {pickupPoint && <p>Pickup point: {pickupPoint}</p>}
    
      </div>
      </>
    )
}
export default Home