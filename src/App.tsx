import React, { useEffect, useState } from 'react';

import Header from './components/Header';
import Price from './components/Price';
import Payment from './components/Payment';
import Change from './components/Change';
import Done from './components/Done';

export const numberWithCommas = ( x: number ): any => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
export const roundUp = ( amount: number, upTo: number ) => Math.ceil(amount/upTo)*upTo;

const App = () => {
  const [ price, setPrice ] = useState<number>(0);
  const [ change, setChange ] = useState<number>(0);

  const URL_PARAMS = new URLSearchParams(window.location.search);
  const RIDE_PRICE = URL_PARAMS.get('price');

  const WINDOW_HEIGHT = window.innerHeight;

  useEffect(() => {
    setPrice(Number(RIDE_PRICE))
    setChange(roundUp(Number(RIDE_PRICE), 500)- Number(RIDE_PRICE))
  }, []);

  const handleOnSelect = ( amount: number ) => {
    const calculate = amount - price;
    setChange(calculate);
  };

  return (
    <div className={"container"} style={{height: WINDOW_HEIGHT}}>
      <Header />
      <Price price={price} />
      <Payment price={price} onSelect={handleOnSelect} />
      <Change price={price} change={change} />
      <Done />
    </div>
  );
}

export default App;
