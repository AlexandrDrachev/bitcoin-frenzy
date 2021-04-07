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
