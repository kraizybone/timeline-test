export const FETCH_CAMPAING = 'FETCH_CAMPAING';
export const SET_CAMPAIGN = 'SET_CAMPAIGN';

export const fetchCampaign = () => {
  return { type: FETCH_CAMPAING };
};

export const setCampaign = campaign => {
  return { type: SET_CAMPAIGN, payload: { campaign } };
};
