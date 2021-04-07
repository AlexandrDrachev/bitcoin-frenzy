import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Header from '../../components/header';
import NaviBar from '../../components/navi-bar';
import HistoryOperations from '../../components/history-operations';

import { sellBitcoinAction } from './store/sellBitcoinActions';

const SellBitcoinPage = () => {

  const dispatch = useDispatch();
  const bitcoins = useSelector((state) => state.appState.data.bitcoins);
  const btcPrice = useSelector((state) => state.appState.data.btcPrice);
  const head = 'Sell Bitcoin';
  const title = btcPrice && btcPrice < 10000 ?
    'Prices are low, are you sure you want to sell?' :
    'Prices are high, sell now!';

  const sellBitcoin = () => {
    if (bitcoins > 0) {
      return dispatch(sellBitcoinAction());
    }
    return false;
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
              onClick={() => sellBitcoin()}
            >
              Sell 1 Bitcoin
            </div>
          </div>
        </div>
        <HistoryOperations />
      </div>
    </div>
  );
};

export default SellBitcoinPage;
