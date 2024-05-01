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
  const [amount1, setAmount1] = useState(0);
  const [amount2, setAmount2] = useState(0);
  const [discount, setDiscount] = useState(0);


  const handleIncrement = (amountNum) => {
    if (amountNum === 1) {
      setAmount1(amount1 + 1);
    } else {
      setAmount2(amount2 + 1);
    }
  };

  const handleDecrement = (amountNum) => {
    if (amountNum === 1) {
      if (amount1 > 0) {
        setAmount1(amount1 - 1);
      }
    } else {
      if (amount2 > 0) {
        setAmount2(amount2 - 1);
      }
    }
  };

  const handleDiscount = () => {
    if (discount === 0) {
      setDiscount(40);
    } else {
      setDiscount(0);
    }
  };

  const total = amount1 + amount2;
  const grandTotal = total - discount;


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


      <div>


      <div>
      <div>
        <button onClick={() => handleDecrement(1)}>-</button>
        <span>Amount 1: {amount1}</span>
        <button onClick={() => handleIncrement(1)}>+</button>
      </div>
      <div>
        <button onClick={() => handleDecrement(2)}>-</button>
        <span>Amount 2: {amount2}</span>
        <button onClick={() => handleIncrement(2)}>+</button>
      </div>
      <div>
        <button onClick={handleDiscount}>Apply Discount</button>
        <span>Discount: {discount}</span>
      </div>
      <div>
        <span>Total: {total}</span>
      </div>
      <div>
        <span>Grand Total: {grandTotal}</span>
      </div>
    </div>
      </div>
      </>
    )
}
export default Home