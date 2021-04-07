export const appInitialState = {
  loaded: false,
  data: {
    balance: null,
    bitcoins: null,
    btcPrice: null,
    historyOperations: [],
  },
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case 'GET_DATA_SAGA':
      return {
        ...state,
        loaded: true,
        data: action.payload,
      };
    case 'DEPOSIT_SAGA':
      return {
        ...state,
        data: {
          ...state.data,
          balance: action.payload,
        }
      };
    case 'UPDATE_HISTORY_OPERATIONS_SAGA':
      return {
        ...state,
        data: {
          ...state.data,
          historyOperation: action.payload,
        }
      };
    case 'WITHDRAW_SAGA':
      return {
        ...state,
        data: {
          ...state.data,
          balance: action.payload,
        }
      };
    case 'INCREASE_PRICE_SAGA':
      return {
        ...state,
        data: {
          ...state.data,
          btcPrice: action.payload,
        },
      };
    case 'DECREASE_PRICE_SAGA':
      return {
        ...state,
        data: {
          ...state.data,
          btcPrice: action.payload,
        }
      };
    case 'BUY_BITCOIN_SAGA':
      return {
        ...state,
        data: {
          ...state.data,
          bitcoins: action.payload.bitcoins,
          balance: action.payload.balance,
        }
      };
    case 'SELL_BITCOIN_SAGA':
      return {
        ...state,
        data: {
          ...state.data,
          bitcoins: action.payload.bitcoins,
          balance: action.payload.balance,
        },
      };
    default:
      return state;
  }
};
