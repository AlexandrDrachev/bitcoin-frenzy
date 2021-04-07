import {take, call, put, select} from 'redux-saga/effects';

import { myWalletPageTestSaga } from './myWalletPageActions';
import { getTimestampFromDate } from '../../../services/utils';
import { depositSaga, withdrawSaga } from './myWalletPageActions';
import { updateHistoryOperationsSaga } from '../../../components/history-operations/store/historyOperationsActions';

export function* myWalletPageTestWatcher() {
  while (true) {
    yield take('MY_WALLET_PAGE_TEST_ACTION');
    yield call(myWalletPageTestWorker);
  }
}

function* myWalletPageTestWorker() {
  yield put(myWalletPageTestSaga());
}

export function* depositWatcher() {
  while (true) {
    yield take('DEPOSIT_ACTION');
    yield call(depositWorker);
  }
}

function* depositWorker() {
  let balance = yield select((state) => state.appState.data.balance);
  let historyOperations = yield select((state) => state.appState.data.historyOperations);
  const operation = {
    id: getTimestampFromDate(),
    timestamp: getTimestampFromDate(),
    title: '100$ Deposit',
  };
  historyOperations.push(operation);
  yield put(depositSaga(balance + 100));
  yield put(updateHistoryOperationsSaga(historyOperations));
}

export function* withdrawWatcher() {
  while (true) {
    yield take('WITHDRAW_ACTION');
    yield call(withdrawWorker);
  }
}

function* withdrawWorker() {
  let balance = yield select((state) => state.appState.data.balance);
  let historyOperations = yield select((state) => state.appState.data.historyOperations);
  const operation = {
    id: getTimestampFromDate(),
    timestamp: getTimestampFromDate(),
    title: '100$ Withdrawal',
  };
  historyOperations.push(operation);
  yield put(withdrawSaga(balance - 100));
  yield put(updateHistoryOperationsSaga(historyOperations));
}
