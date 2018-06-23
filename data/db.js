import Sequelize from 'sequelize';

const db = new Sequelize(null, null, null, {
  dialect: 'sqlite',
  storage: './data.sqlite'
});

const Campaign = db.define('campaing', {
  budget: { type: Sequelize.INTEGER },
  goal: { type: Sequelize.INTEGER },
  actual: { type: Sequelize.INTEGER },
  frequency: { type: Sequelize.INTEGER },
  reach: { type: Sequelize.INTEGER },
  endedAt: { type: Sequelize.DATE }
});

const Milestone = db.define('milestone', {
  score: { type: Sequelize.DOUBLE },
  spent: { type: Sequelize.INTEGER },
  reach: { type: Sequelize.INTEGER },
  frequency: { type: Sequelize.DOUBLE },
  impressions: { type: Sequelize.INTEGER },
  psr: { type: Sequelize.DOUBLE },
  cpv: { type: Sequelize.DOUBLE },
  note: { type: Sequelize.TEXT }
});

const Creative = db.define('creative', {
  type: { type: Sequelize.TINYINT },
  name: { type: Sequelize.STRING },
  label: { type: Sequelize.STRING },
  impressions: { type: Sequelize.INTEGER },
  psr: { type: Sequelize.DOUBLE },
  views: { type: Sequelize.DOUBLE },
  cpv: { type: Sequelize.DOUBLE }
});

const Report = db.define('report', {
  name: { type: Sequelize.STRING },
  filename: { type: Sequelize.STRING }
});

const CampaignReports = db.define('campaign_reports');

Campaign.hasMany(Milestone);

Milestone.hasMany(Creative);
Milestone.belongsTo(Campaign);

Creative.belongsTo(Milestone);

Milestone.belongsTo(Report);

Campaign.belongsToMany(Report, { through: CampaignReports });
Report.belongsToMany(Campaign, { through: CampaignReports });

export { db, Campaign, Milestone, Creative, Report, CampaignReports };
