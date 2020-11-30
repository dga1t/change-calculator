import React from 'react';
import { numberWithCommas } from '../App';
import styles from '../styles/Price.module.css';
import i18n from '../i18n/index';

const Price = ( props: any ) => {
  return(
    <div className={styles.price}>
      <p>{ i18n.t('price') }</p>
      <div>{numberWithCommas(props.price)} 円</div>
    </div>
  );
};

export default Price;