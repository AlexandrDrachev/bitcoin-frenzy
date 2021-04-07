export const testAppStateAction = () => {
  return {
    type: 'TEST_APP_STATE_ACTION',
  };
};

export const testAppStateSaga = () => {
  return {
    type: 'TEST_APP_STATE_SAGA',
  };
};

export const getDataAction = () => {
  return {
    type: 'GET_DATA_ACTION',
  };
};

export const getDataSaga = (data) => {
  return {
    type: 'GET_DATA_SAGA',
    payload: data,
  };
};
