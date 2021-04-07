import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Header from '../../components/header';
import NaviBar from '../../components/navi-bar';
import HistoryOperations from '../../components/history-operations';
import { buyBitcoinAction } from './store/buyBitcoinActions';

const ByBitcoinPage = () => {

  const dispatch = useDispatch();
  const btcPrice = useSelector((state) => state.appState.data.btcPrice);
  const balance = useSelector((state) => state.appState.data.balance);
  const head = 'Buy Bitcoin';
  const title = btcPrice && btcPrice >= 10000 ?
    'Prices are high, are you sure that you want to buy?' :
    'Prices are low, buy more!';

  const buyBitcoin = () => {
    if (balance < 1000) {
      return false
    }
    return dispatch(buyBitcoinAction());
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full flex justify-center items-center">
        <Header />
      </div>
      <div className="w-full flex justify-between items-center">
        <NaviBar />
        <div className="h-screen flex flex-col justify-center items-center text-blue-900">
          <h1 className="my-10">
            {head}
          </h1>
          <span className="font-bold">Current price: ${btcPrice}</span>
          <span className="my-7">
        {title}
      </span>
          <div>
            <div
              className={`w-40 p-2 flex justify-center items-center bg-blue-900 text-white font-bold rounded-xl
              cursor-pointer my-5`}
              onClick={() => buyBitcoin()}
            >
              Buy 1 Bitcoin
            </div>
          </div>
        </div>
        <HistoryOperations />
      </div>
    </div>
  );
};

export default ByBitcoinPage;
