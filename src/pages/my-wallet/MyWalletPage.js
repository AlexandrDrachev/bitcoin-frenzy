import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/header';
import NaviBar from '../../components/navi-bar';
import HistoryOperations from '../../components/history-operations';

import { depositAction, withdrawAction } from './store/myWalletPageActions';

const MyWalletPage = () => {

  const head = 'Your Bitcoin wallet';
  const title = 'Your now own 7 Bitcoins';
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.appState.data.balance);

  const getDeposit = () => {
    dispatch(depositAction());
  };

  const withdraw = () => {
    if (balance > 0) {
      return dispatch(withdrawAction());
    }
    return false;
  };

  return (
    <div className="w-full flex flex-col justify-start items-center">
      <div className="w-full flex justify-center items-center">
        <Header />
      </div>
      <div className="w-full flex justify-between items-center">
        <NaviBar />
        <div className="h-screen flex flex-col justify-center items-center text-blue-900">
          <h1 className="my-10">
            {head}
          </h1>
          <span className="my-7">
        {title}
      </span>
          <div>
            <div
              className={`w-40 p-2 flex justify-center items-center bg-blue-900 text-white font-bold rounded-xl
              cursor-pointer my-5`}
              onClick={() => getDeposit()}
            >
              Deposit $100
            </div>
            <div
              className={`w-40 p-2 flex justify-center items-center bg-blue-900 text-white font-bold rounded-xl
              cursor-pointer my-5`}
              onClick={() => withdraw()}
            >
              Withdraw $100
            </div>
          </div>
        </div>
        <HistoryOperations />
      </div>
    </div>
  );
};

export default MyWalletPage;
