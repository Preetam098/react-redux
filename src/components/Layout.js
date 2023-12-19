
import React, { useState } from 'react';
import Languageoption from '../components/language-dropdown'
import {useTranslation} from 'react-i18next'
import i18next from "i18next"

const Layout = () => {
 
  const {t} = useTranslation();
  const handleClick=(e)=>{
      i18next.changeLanguage(e.target.value)
  }

    return(
        <>   
        <div style={{marginTop:'50px'}}> 
            <Languageoption onChange={(e)=> handleClick(e)}/>
            <h1>{t('welcome')} {t('about')} || Seema {t('holiday')} Developer</h1>
        </div>
        </>
       
    )
}
export default Layout