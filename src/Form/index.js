import React from 'react';
import Currency from '../Currency'
import BankSync from '../BankSync'
import './style.scss'

const Form = () => {
  return (
    <div className="Form">
      <Currency />
      <div className="Form__divider" />
      <BankSync />
    </div>
  );
};

export default Form;
