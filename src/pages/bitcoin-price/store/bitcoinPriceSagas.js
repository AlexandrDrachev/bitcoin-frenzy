import { take, call, put, select } from 'redux-saga/effects';

import { increasePriceSaga, decreasePriceSaga } from './bitcoinPriceActions';
import { updateHistoryOperationsSaga } from '../../../components/history-operations/store/historyOperationsActions';
import { getTimestampFromDate } from "../../../services/utils";

export function* increasePriceWatcher() {
  while (true) {
    yield take('INCREASE_PRICE_ACTION');
    yield call(increasePriceWorker);
  }
}

function* increasePriceWorker() {
  const price = yield select((state) => state.appState.data.btcPrice);
  let historyOperations = yield select((state) => state.appState.data.historyOperations);
  const operation = {
    id: getTimestampFromDate(),
    timestamp: getTimestampFromDate(),
    title: 'Increased Bitcoin price by 1,000$',
  };
  historyOperations.push(operation);
  yield put(increasePriceSaga(price + 1000));
  yield put(updateHistoryOperationsSaga(operation));
}

export function* decreasePriceWatcher() {
  while (true) {
    yield take('DECREASE_PRICE_ACTION');
    yield call(decreasePriceWorker);
  }
}

function* decreasePriceWorker() {
  const price = yield select((state) => state.appState.data.btcPrice);
  let historyOperations = yield select((state) => state.appState.data.historyOperations);
  const operation = {
    id: getTimestampFromDate(),
    timestamp: getTimestampFromDate(),
    title: 'Decreased Bitcoin price by 1,000$',
  };
  historyOperations.push(operation);
  if (price <= 0) {
    return yield put(decreasePriceSaga(0));
  }
  yield put(decreasePriceSaga(price - 1000));
  yield put(updateHistoryOperationsSaga(operation));
}
