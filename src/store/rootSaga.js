import { all } from 'redux-saga/effects';

import { getDataWatcher } from '../pages/app/store/appSagas';
import { depositWatcher, withdrawWatcher } from '../pages/my-wallet/store/myWalletPageSagas';
import { increasePriceWatcher, decreasePriceWatcher } from '../pages/bitcoin-price/store/bitcoinPriceSagas';
import { buyBitcoinWatcher } from '../pages/buy-bitcoin/store/buyBitcoinSagas';
import { sellBitcoinWatcher } from '../pages/sell-bitcoin/store/sellBitcoinSagas';

function* rootSaga() {
  yield all([
    getDataWatcher(),
    depositWatcher(),
    withdrawWatcher(),
    increasePriceWatcher(),
    decreasePriceWatcher(),
    buyBitcoinWatcher(),
    sellBitcoinWatcher(),
  ]);
}

export default rootSaga;
