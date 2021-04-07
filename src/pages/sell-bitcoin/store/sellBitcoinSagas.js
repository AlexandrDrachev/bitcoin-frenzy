import { take, call, put, select } from 'redux-saga/effects';

import { sellBitcoinSaga } from './sellBitcoinActions';
import { updateHistoryOperationsSaga } from '../../../components/history-operations/store/historyOperationsActions';
import { getTimestampFromDate } from '../../../services/utils';

export function* sellBitcoinWatcher() {
  while (true) {
    yield take('SELL_BITCOIN_ACTION');
    yield call(sellBitcoinWorker);
  }
}

function* sellBitcoinWorker() {
  const balance = yield select((state) => state.appState.data.balance);
  const bitcoins = yield select((state) => state.appState.data.bitcoins);
  const historyOperations = yield select((state) => state.appState.data.historyOperations);
  const operation = {
    id: getTimestampFromDate(),
    timestamp: getTimestampFromDate(),
    title: 'Sold 1 Bitcoin',
  };
  historyOperations.push(operation);
  const data = {
    balance: balance + 1000,
    bitcoins: bitcoins - 1,
  };
  yield put(sellBitcoinSaga(data));
  yield put(updateHistoryOperationsSaga(historyOperations))
}
