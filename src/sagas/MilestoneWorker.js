import { call, put } from 'redux-saga/effects';

import { queryGraphQL } from '../helpers';
import { updateCampaignMilestoneNoteMutation } from '../queries';

import { setApiReuestError } from '../actions/AppAction';
import { delay } from 'redux-saga';

export function* updateMilestoneNoteWorker(action) {
  const { campaignId, milestoneId, note = '' } = action.payload;
  if (campaignId && milestoneId) {
    yield delay(500);
    try {
      const response = yield call(
        queryGraphQL,
        updateCampaignMilestoneNoteMutation({ campaignId, milestoneId, note })
      );
      if (!response.data) {
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
}
