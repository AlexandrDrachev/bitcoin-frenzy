export const buyBitcoinAction = () => {
  return {
    type: 'BUY_BITCOIN_ACTION',
  };
};

export const buyBitcoinSaga = (bitcoins) => {
  return {
    type: 'BUY_BITCOIN_SAGA',
    payload: bitcoins,
  };
};
