import { take, call, put } from 'redux-saga/effects';

import { getDataSaga } from './appActions';
import ServiceApi from '../../../services/serviceApi';

const serviceApi = new ServiceApi();

export function* getDataWatcher() {
  while (true) {
    yield take('GET_DATA_ACTION');
    yield call(getDataWorker);
  }
}

function* getDataWorker() {
  const { getDataFromApi } = serviceApi;
  const newData = yield call(getDataFromApi);
  yield put(getDataSaga(newData));
}
