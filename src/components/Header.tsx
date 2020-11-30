import React from 'react';
import styles from '../styles/Header.module.css';
import i18n from '../i18n/index';

const Header = () => {
  return(
    <div className={styles.header}>
      <h4>{ i18n.t('reminder') }</h4>
    </div>
  );
};

export default Header;