import React from 'react';
import styles from '../styles/Change.module.css';
import i18n from '../i18n/index';

const Change = ( props: any ) => {
  const { price, change } = props;

  return(
    <div className={styles.change}>
      <p>{ i18n.t('change') }</p>
      <div><p>{ (change > 0 && price !== 0) ? change | 0 : null } 円</p></div>
    </div>
  );
};

export default Change;