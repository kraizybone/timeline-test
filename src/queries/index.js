import { templater } from '../helpers';

export const campaingQuery = `
  query {
    campaign {
      id
      budget
      goal
      actual
      frequency
      reach
      createdAt
      endedAt
      reports {
        id
        name
        filename
      }
      milestones {
       id
       score
       spent
       reach
       frequency
       impressions
       psr
       cpv
       note
       createdAt
       report {
        id
        name
        filename
       }
       creatives {
         type
         name
         label
         impressions
         psr
         views
         cpv
       }
      }
    }
  }
`;

export const updateCampaignMilestoneNoteMutation = templater`
  mutation{
    updateCampaignMilestoneNote(campaignId:${'campaignId'},milestoneId:${'milestoneId'},note:"${'note'}") {
      id
    }
  }
`;
