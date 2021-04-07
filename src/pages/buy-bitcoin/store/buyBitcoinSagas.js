import { take, call, put, select } from 'redux-saga/effects';
import { getTimestampFromDate } from '../../../services/utils';
import { buyBitcoinSaga } from './buyBitcoinActions';
import { updateHistoryOperationsSaga } from '../../../components/history-operations/store/historyOperationsActions';

export function* buyBitcoinWatcher() {
  while (true) {
    yield take('BUY_BITCOIN_ACTION');
    yield call(buyBitcoinWorker);
  }
}

function* buyBitcoinWorker() {
  const bitcoins = yield select((state) => state.appState.data.bitcoins);
  const balance = yield select((state) => state.appState.data.balance);
  const historyOperations = yield select((state) => state.appState.data.historyOperations);
  const operation = {
    id: getTimestampFromDate(),
    timestamp: getTimestampFromDate(),
    title: 'Purchased 1 Bitcoin',
  };
  historyOperations.push(operation);
  const data = {
    balance: balance - 1000,
    bitcoins: bitcoins + 1,
  };
  yield put(buyBitcoinSaga(data));
  yield put(updateHistoryOperationsSaga(historyOperations))
}
