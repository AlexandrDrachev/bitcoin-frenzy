import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Header from '../../components/header';
import NaviBar from '../../components/navi-bar';
import HistoryOperations from '../../components/history-operations';

import { increasePriceAction, decreasePriceAction } from './store/bitcoinPriceActions';

const BitcoinPricePage = () => {

  const btcPrice = useSelector((state) => state.appState.data.btcPrice)
  const head = 'Your Bitcoin price';
  const title = 'Change the cost';
  const dispatch = useDispatch();

  const increase = () => {
    dispatch(increasePriceAction());
  };

  const decrease = () => {
    if (btcPrice > 1000) {
      return dispatch(decreasePriceAction());
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
              onClick={() => increase()}
            >
              Increase $1000
            </div>
            <div
              className={`w-40 p-2 flex justify-center items-center bg-blue-900 text-white font-bold rounded-xl
              cursor-pointer my-5`}
              onClick={() => decrease()}
            >
              Decrease $1000
            </div>
          </div>
        </div>
        <HistoryOperations />
      </div>
    </div>
  );
};

export default BitcoinPricePage;
