import React from 'react';
import Dropdown from '../Dropdown';
import './style.scss'

const Currency = () => {
  return (
    <div className="Currency">
      <h1>Валюта</h1>
      <h2>Основная валюта</h2>
      <Dropdown />
      <h2>Копейки в суммах</h2>
      <div className="Currency__input-wrap">
        <label>
          <input type="radio" name="coins" defaultChecked />
          <span className="Currency__radio" />
          Показывать
        </label>
        <label>
          <input type="radio" name="coins" />
          <span className="Currency__radio" />
          Скрыть
        </label>
      </div>
    </div>
  );
};

export default Currency;
