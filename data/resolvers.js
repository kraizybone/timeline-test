import { Campaign, Milestone, Creative, Report } from './db';

const resolvers = {
  Query: {
    campaign() {
      return Campaign.findOne({
        include: [
          {
            model: Report,
            as: 'reports'
          },
          {
            model: Milestone,
            as: 'milestones',
            include: [
              {
                model: Report,
                as: 'report'
              },
              {
                model: Creative,
                as: 'creatives'
              }
            ]
          }
        ]
      });
    }
  },
  Mutation: {
    updateCampaignMilestoneNote(_, { campaignId, milestoneId, note }) {
      return Milestone.findOne({
        where: {
          campaingId: campaignId,
          id: milestoneId
        }
      }).then(milestone => {
        milestone.note = note;
        milestone.save();
        return milestone;
      });
    }
  }
};

export default resolvers;
