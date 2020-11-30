import React from 'react';
import { numberWithCommas, roundUp } from '../App';
import styles from '../styles/Payment.module.css';
import i18n from '../i18n/index';

const Payment = ( props: any ) => {
  const { price, onSelect } = props;
  const { payment, gridContainer, gridItem, button } = styles;

  const maxLengthCheck = ( object: any )=> {
    if (object.value.length > object.maxLength)
      return object.value = object.value.slice(0, object.maxLength)
  };

  const OPTION_1 = roundUp(price, 500);
  const OPTION_2 = roundUp(price, 1000) === OPTION_1 && price !== 0 ? OPTION_1 + 1000 : roundUp(price, 1000);
  const OPTION_3 = price !== 0 ? OPTION_2 + 3000 : 0;

  return(
    <div className={payment}>
      <p>{ i18n.t('payment') }</p>
      <div className={gridContainer}>
        <div className={gridItem}>
          <button className={button} onClick={() =>onSelect(OPTION_1)} autoFocus> {numberWithCommas(OPTION_1)} </button>
        </div>
        <div className={gridItem}>
          <button className={button} onClick={() =>onSelect(OPTION_2)}> {numberWithCommas(OPTION_2)} </button>
        </div>
        <div className={gridItem}>
          <button className={button} onClick={() =>onSelect(OPTION_3)}> {numberWithCommas(OPTION_3)} </button>
        </div>
        <div className={gridItem}>
          <input
            type='number'
            placeholder={ i18n.t('placeholder') }
            maxLength={7}
            onInput={event => maxLengthCheck(event.target)}
            onChange={event => onSelect(event.target.value)}
            onFocus={event => onSelect(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;