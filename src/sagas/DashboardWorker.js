import { call, put } from 'redux-saga/effects';

import { queryGraphQL } from '../helpers/';
import { campaingQuery } from '../queries/';

import { setCampaign } from '../actions/DashboardAction';
import { setApiRequestSuccess, setApiReuestError, initApiRequest } from '../actions/AppAction';

export function* fetchCampaignWorker() {
  yield put(initApiRequest());
  try {
    const response = yield call(queryGraphQL, campaingQuery);
    if (response.data) {
      const { campaign } = response.data;
      yield put(setApiRequestSuccess());
      yield put(setCampaign(campaign));
    } else {
      yield put(setApiReuestError('General error message!'));
    }
  } catch (error) {
    if (error.message) {
      yield put(setApiReuestError(error.message));
    } else {
      yield put(setApiReuestError('General error message!'));
    }
  }
}
