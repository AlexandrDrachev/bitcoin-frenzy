import React from 'react';

export const getTimestampFromDate = () => {
  return Date.parse(new Date().toISOString());
};

const transformMonth = (month) => {
  switch (month) {
    case 0: {
      return '01';
    }
    case 1 : {
      return '02';
    }
    case 2 : {
      return '03';
    }
    case 3 : {
      return '04';
    }
    case 4 : {
      return '05';
    }
    case 5 : {
      return '06';
    }
    case 6 : {
      return '07';
    }
    case 7 : {
      return '08';
    }
    case 8 : {
      return '09';
    }
    case 9 : {
      return '10';
    }
    case 10 : {
      return '11';
    }
    case 11 : {
      return '12';
    }
    default:
      return false;
  }
}

export const getDateFromTimestamp = (timestamp) => {
  return (
    <div className="pt-3 flex ml-2 mb-4">
      <span>
        {new Date(timestamp).getDate() >= 10 ? new Date(timestamp).getDate() : '0' + new Date(timestamp).getDate()}
        /
        {transformMonth(new Date(timestamp).getMonth())}
        /
        {new Date(timestamp).getFullYear()}
      </span>
      <span className="ml-2">
        {new Date(timestamp).getHours() >= 10 ? new Date(timestamp).getHours() : '0' + new Date(timestamp).getHours()}
        :
        {new Date(timestamp).getMinutes() >= 10 ? new Date(timestamp).getMinutes() : '0' + new Date(timestamp).getMinutes()}
      </span>
    </div>
  );
};
