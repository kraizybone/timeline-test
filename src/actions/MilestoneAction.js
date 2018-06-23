export const UPDATE_MILESTONE_NOTE = 'UPDATE_MILESTONE_NOTE';

export const updateMilestoneNote = (campaignId, milestoneId, note) => {
  return {
    type: UPDATE_MILESTONE_NOTE,
    payload: {
      campaignId,
      milestoneId,
      note
    }
  };
};
