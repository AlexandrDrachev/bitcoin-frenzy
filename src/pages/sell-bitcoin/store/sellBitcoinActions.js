export const sellBitcoinAction = () => {
  return {
    type: 'SELL_BITCOIN_ACTION',
  };
};

export const sellBitcoinSaga = (bitcoins) => {
  return {
    type: 'SELL_BITCOIN_SAGA',
    payload: bitcoins,
  };
};
