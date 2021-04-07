export const initialMyWalletPageState = {
  testField: 'myWalletPageState is ready!',
};

export const myWalletPageReducer = (state, action) => {

  switch (action.type) {
    case 'MY_WALLET_PAGE_TEST_SAGA':
      return {...state};
    default:
      return state;
  }
};
