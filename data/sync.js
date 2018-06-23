import _ from 'lodash';
import casual from 'casual';
import { db, Campaign, Report } from './db';

const mockData = {
  campaign: {
    budget: 2.5e5,
    goal: 3e6,
    frequency: 6,
    reach: 8e5,
    actual: 6728123,
    createdAt: Date.UTC(2017, 8, 1),
    endedAt: Date.UTC(2017, 9, 12),
    reports: [
      {
        name: 'Post Buy Report',
        filename: 'file.pdf'
      },
      {
        name: 'PostTrak General Audience Report',
        filename: 'file.pdf'
      }
    ]
  },
  milestones: [
    {
      createdAt: Date.UTC(2017, 8, 7),
      score: 4.7,
      spent: 45e3,
      reach: 14e6,
      frequency: 1.14,
      impressions: 78e6,
      psr: 1.52,
      cpv: 0.05,
      report: {
        name: 'Weekly Report',
        filename: 'file.pdf'
      }
    },
    {
      createdAt: Date.UTC(2017, 8, 14),
      score: 4.9,
      spent: 46e3,
      reach: 16e6,
      frequency: 1.66,
      impressions: 106e6,
      psr: 1.58,
      cpv: 0.052,
      report: {
        name: 'Weekly Report',
        filename: 'file.pdf'
      }
    },
    {
      createdAt: Date.UTC(2017, 8, 21),
      score: 4.9,
      spent: 46e3,
      reach: 16e6,
      frequency: 1.66,
      impressions: 106e6,
      psr: 1.58,
      cpv: 0.052,
      report: {
        name: 'Weekly Report',
        filename: 'file.pdf'
      }
    },
    {
      createdAt: Date.UTC(2017, 8, 28),
      score: 4.9,
      spent: 46e3,
      reach: 16e6,
      frequency: 1.66,
      impressions: 106e6,
      psr: 1.58,
      cpv: 0.052,
      report: {
        name: 'Weekly Report',
        filename: 'file.pdf'
      }
    },
    {
      createdAt: Date.UTC(2017, 9, 5),
      score: 5.0,
      spent: 46e3,
      reach: 18e6,
      frequency: 1.86,
      impressions: 115e5,
      psr: 1.59,
      cpv: 0.054,
      report: {
        name: 'Weekly Report',
        filename: 'file.pdf'
      }
    },
    {
      createdAt: Date.UTC(2017, 9, 12),
      score: 5.0,
      spent: 46e3,
      reach: 18e6,
      frequency: 1.86,
      impressions: 115e5,
      psr: 1.59,
      cpv: 0.054
    }
  ]
};

db.sync({ force: true }).then(() => {
  Campaign.create(mockData.campaign).then(campaign => {
    _.each(mockData.campaign.reports, mockReport => {
      Report.create({
        name: mockReport.name,
        filename: mockReport.filename
      }).then(report => {
        campaign.addReport(report);
      });
    });
    _.each(mockData.milestones, mockDataMilestone => {
      campaign.createMilestone(mockDataMilestone).then(milestone => {
        if (mockDataMilestone.report) {
          milestone.createReport(mockDataMilestone.report);
        }
        _.times(20, () => {
          milestone.createCreative({
            type: casual.integer(1, 7),
            name: ['Trailer', 'Teaser Trailer', 'Alarm', 'Extended Trailer'][casual.integer(0, 3)],
            label: 'Trailer',
            impressions: casual.integer(200e3, 9e4),
            psr: casual.double(1.2, 2.2).toFixed(2),
            views: casual.double(0.1, 1).toFixed(2),
            cpv: casual.double(0.009, 5).toFixed(4)
          });
        });
      });
    });
  });
});
