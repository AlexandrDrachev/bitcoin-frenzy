import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { getDateFromTimestamp } from '../../services/utils';

const HistoryOperations = () => {

  const [operations, setOperations] = useState([]);
  const data = useSelector((state) => state.appState.data.historyOperations);

  const renderHistoryOperations = () => {
    const list = JSON.parse(JSON.stringify(operations));
    return list.reverse().map((item) => {
      return (
        <div
          key={item.id}
          className="w-full flex flex-col justify-start items-start text-xs border-b border-gray-500"
        >
          {getDateFromTimestamp(item.timestamp)}
          <div className="mx-5 mb-7">
            <span>{item.title}</span>
          </div>
        </div>
      );
    });
  };

  useEffect(() => {
    if (data) {
      setOperations(data);
    }
  }, [data]);

  return (
    <div
      className="h-screen pb-20 w-52 bg-gray-300 flex flex-col justify-start items-start text-blue-900 font-bold
      overflow-auto"
    >
      {renderHistoryOperations()}
    </div>
  );
};

export default HistoryOperations;
