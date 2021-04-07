import React from 'react';

import { useSelector } from 'react-redux';

import { ReactComponent as BtcIcon } from '../../icons/bitcoin-btc-logo.svg';

const Header = () => {

  const data = useSelector((state) => state.appState.data);

  return (
    <div className="w-full flex justify-between items-center bg-purple-800 p-3 text-white">
      <div className="flex justify-center items-center">
        <div className="w-10 h-10">
          <BtcIcon />
        </div>
        <h1 className="ml-3 font-bold">BITCOIN FRENZY</h1>
      </div>
      {data && <div className="text-md">
        1 bitcoin = ${data.btcPrice}
      </div>}
      <div className="text-xs">
        {data && <div>${data.balance}</div>}
        {data && <div>{data.bitcoins} bitcoins</div>}
      </div>
    </div>
  );
};

export default Header;
