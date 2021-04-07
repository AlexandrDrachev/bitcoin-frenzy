export const depositAction = () => {
  return {
    type: 'DEPOSIT_ACTION',
  };
};

export const depositSaga = (balance) => {
  return {
    type: 'DEPOSIT_SAGA',
    payload: balance,
  };
};

export const withdrawAction = () => {
  return {
    type: 'WITHDRAW_ACTION',
  };
};

export const withdrawSaga = (balance) => {
  return {
    type: 'WITHDRAW_SAGA',
    payload: balance,
  };
};
