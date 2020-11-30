import React from 'react';
import styles from '../styles/Done.module.css';
import i18n from '../i18n/index';

const Done = () => {
  const { done, btn } = styles;

  const CURRENT_LOCATION = window.location.href.split('?')[0];

  return(
    <div className={done}>
      <div className={btn}><a href={`${CURRENT_LOCATION}?message=success`}>{ i18n.t('doneBtn') }</a></div>
    </div>
  );
};

export default Done;