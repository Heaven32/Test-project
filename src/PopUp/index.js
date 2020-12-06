import React from 'react';
import './style.scss'

const PopUp = ({popUpState, setPopUpState}) => {

  return (
    <div className={`PopUp${popUpState ? '_show' : ''}`}>

      <div className="PopUp__block">
        <div className="Wrap__svg">
          <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23 0.75L7.875 14.5L1 8.25" stroke="#545454" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>        
        <span>Синхронизация с банком {"\n"} добавлена</span>
        <div onClick={()=>setPopUpState(false)} className="Understand__btn">Понял</div>
      </div>
    </div>
  );
};

export default PopUp;
