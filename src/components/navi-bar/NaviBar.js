import React from 'react';

import { Link } from 'react-router-dom';

const NaviBar = () => {

  return (
    <div
      className="flex flex-col justify-start items-start h-screen pl-5 pr-10 pt-10 bg-purple-800 text-white
      text-sm"
    >
      <Link to="/wallet" className={`my-1 cursor-pointer text-gray-300 hover:text-white`}>
        MY WALLET
      </Link>
      <Link to="/buy" className={`my-1 cursor-pointer text-gray-300 hover:text-white`}>
        BUY BITCOIN
      </Link>
      <Link to="/sell" className={`my-1 cursor-pointer text-gray-300 hover:text-white`}>
        SELL BITCOIN
      </Link>
      <Link to="/bitcoin" className={`my-1 cursor-pointer text-gray-300 hover:text-white`}>
        BITCOIN PRICE
      </Link>
    </div>
  );
};

export default NaviBar;
