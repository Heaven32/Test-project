import React, {useState} from 'react';
import './style.css'

const Index = () => {
  const [isOpen, setOpen] = useState(false);
  const [value, setValue] = useState('Выбрать валюту');
  return (
    <div className="Dropdown" onClick={()=>setOpen(!isOpen)} >
      <div className="Dropdown__title">
        {value}
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L5 5L9 1" stroke="#A5A5A5" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div className={`Dropdown__menu${isOpen ? '_open': ''}`}>
        <div
          className="Dropdown__menu-item"
          onClick={()=> {
            setValue('USD - Доллар США');
            setOpen(false);
          }}
        >
          <span className="Block__img"></span>
          USD - Доллар США
        </div>
        <div
          className="Dropdown__menu-item"
          onClick={()=>{
            setValue('UAH - Украинская гривна');
            setOpen(false);
          }}
        >
          <span className="Block__img"></span>
          UAH - Украинская гривна
        </div>
        <div
          className="Dropdown__menu-item"
          onClick={()=>{
            setValue('EUR - Евро');
            setOpen(false);
          }}
        >
          <span className="Block__img"></span>
          EUR - Евро
        </div>
        <div
          className="Dropdown__menu-item"
          onClick={()=>{
            setValue('RUB - Российский рубль');
            setOpen(false);
          }}
        >
          <span className="Block__img"></span>
          RUB - Российский рубль
        </div>
      </div>
    </div>
  );
};

export default Index;
