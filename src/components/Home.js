import React from "react"

import Languageoption from '../components/language-dropdown'
import {useTranslation} from 'react-i18next'
import i18next from "i18next"


const Home = () => {
    const {t} = useTranslation();
    const handleClick=(e)=>{
        i18next.changeLanguage(e.target.value)
    }
    return(
        <div style={{marginTop:'50px'}}>
        
            <Languageoption onChange={(e)=> handleClick(e)}/>
            <h1>{t('benifit_title1')} {t('first_benefit.heading')} || React {t('holiday')} Developer</h1>
            </div>
        
    )
}
export default Home