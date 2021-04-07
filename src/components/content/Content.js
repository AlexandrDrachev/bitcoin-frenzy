import React from 'react';

import { useHistory } from 'react-router-dom';

const Content = ({ head, title }) => {

  const history = useHistory();
  const { pathname } = history.location;

  return (
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
        >
          Deposit $100
        </div>
        {pathname === '/wallet' && <div
          className={`w-40 p-2 flex justify-center items-center bg-blue-900 text-white font-bold rounded-xl
          cursor-pointer my-5`}
        >
          Withdraw $100
        </div>}
      </div>
    </div>
  );
};

export default Content;
