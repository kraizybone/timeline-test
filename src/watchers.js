import { takeLatest } from 'redux-saga/effects';

import { fetchCampaignWorker } from './sagas/DashboardWorker';
import { updateMilestoneNoteWorker } from './sagas/MilestoneWorker';

import { FETCH_CAMPAING } from './actions/DashboardAction';
import { UPDATE_MILESTONE_NOTE } from './actions/MilestoneAction';

function* watchers() {
  yield takeLatest(FETCH_CAMPAING, fetchCampaignWorker);
  yield takeLatest(UPDATE_MILESTONE_NOTE, updateMilestoneNoteWorker);
}

export { watchers };
