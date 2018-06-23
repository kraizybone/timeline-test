import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';
import { GraphQLDateTime } from 'graphql-iso-date';

const typeDefs = `
scalar GraphQLDateTime
type Query {
  campaign: Campaign,
}
type Campaign {
  id: Int
  budget: Int
  goal: Int
  actual: Int
  frequency: Int
  reach: Int
  endedAt: GraphQLDateTime
  createdAt: GraphQLDateTime
  updatedAt: GraphQLDateTime
  milestones: [Milestone]
  reports: [Report]
}
type Report {
  id: Int
  name: String
  filename: String
  createdAt: GraphQLDateTime
  updatedAt: GraphQLDateTime
}
type Milestone {
  id: Int
  score: Float
  spent: Int
  reach: Int
  frequency: Float
  impressions: Int
  psr: Float
  cpv: Float
  note: String
  createdAt: GraphQLDateTime
  updatedAt: GraphQLDateTime
  report: Report
  creatives: [Creative]
}
type Creative {
  id: Int
  type: Int
  name: String
  label: String
  impressions: Int
  psr: Float
  views: Float
  cpv: Float
  createdAt: GraphQLDateTime
  updatedAt: GraphQLDateTime
}
type Mutation {
  updateCampaignMilestoneNote(campaignId: Int!, milestoneId: Int!, note: String!): Milestone
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
