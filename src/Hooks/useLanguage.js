import React, { useState, useEffect } from 'react';
import { langText } from '../utils/constants';

const useLanguage = () => {
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const index = Math.floor(Math.random() * langText.length);
      setCurrentText(langText[index]);
    }, 3000); 

    
    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div >
      <p className='typing '>{currentText}</p>
    </div>
  );
}

export default useLanguage;
