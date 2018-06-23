import { SET_CAMPAIGN } from '../actions/DashboardAction';

const initialState = {
  dashboard: {
    campaign: {}
  }
};

export default (state = initialState.dashboard, action) => {
  switch (action.type) {
    case SET_CAMPAIGN:
      return { ...state, campaign: { ...state.campaign, ...action.payload.campaign } };
    default:
      return state;
  }
};
