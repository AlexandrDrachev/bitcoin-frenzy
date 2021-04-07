import { all } from 'redux-saga/effects';

import { appTestWatcher, getDataWatcher } from '../pages/app/store/appSagas';
import { depositWatcher, withdrawWatcher } from '../pages/my-wallet/store/myWalletPageSagas';
import { increasePriceWatcher, decreasePriceWatcher } from '../pages/bitcoin-price/store/bitcoinPriceSagas';
import { buyBitcoinWatcher } from '../pages/buy-bitcoin/store/buyBitcoinSagas';
import { sellBitcoinWatcher } from '../pages/sell-bitcoin/store/sellBitcoinSagas';

function* rootSaga() {
  yield all([
    testRootSaga(),
    appTestWatcher(),
    getDataWatcher(),
    depositWatcher(),
    withdrawWatcher(),
    increasePriceWatcher(),
    decreasePriceWatcher(),
    buyBitcoinWatcher(),
    sellBitcoinWatcher(),
  ]);
}

function* testRootSaga() {
  yield console.log('rootSaga is ready!')
}

export default rootSaga;
