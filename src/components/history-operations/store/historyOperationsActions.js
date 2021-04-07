export const updateHistoryOperationsSaga = (operations) => {
  return {
    type: 'UPDATE_HISTORY_OPERATIONS_SAGA',
    payload: operations,
  };
};
