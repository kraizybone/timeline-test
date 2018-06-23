import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { updateMilestoneNote } from '../../../actions/MilestoneAction';

import Report from '../_partials/Report.js';

import Note from './Note';
import Creatives from './Creatives';
import Summary from './SummaryMilestone';

class Milestone extends Component {
  render() {
    const {
      campaignId,
      id: milestoneId,
      createdAt,
      endedAt,
      score,
      spent,
      reach,
      frequency,
      impressions,
      psr,
      cpv,
      report,
      note,
      updateNote,
      creatives,
      prev = null
    } = this.props;
    const createdAtMoment = moment.utc(createdAt);
    const endedAtMoment = moment.utc(endedAt);
    const weekNum = endedAtMoment.diff(createdAtMoment, 'week');

    return (
      <section className="timeline__detail">
        <section className="detail__item">
          <div className="item__title">week {weekNum}</div>
          <Summary
            score={score}
            spent={spent}
            reach={reach}
            frequency={frequency}
            impressions={impressions}
            psr={psr}
            cpv={cpv}
            prev={prev}
          />
        </section>
        <section className="detail__item">
          <div className="item__title">Reports</div>
          <Report data={report} />
        </section>
        <section className="detail__item">
          <div className="item__title">Notes</div>
          <Note text={note} updateNote={updateNote(campaignId, milestoneId)} />
        </section>
        <section className="detail__item">
          <div className="item__title">Creatives</div>
          <Creatives data={creatives} />
        </section>
      </section>
    );
  }
}

const mapDipstachToProps = (dispatch, ownProps) => {
  return {
    updateNote: (campaignId, milestoneId) => note => {
      dispatch(updateMilestoneNote(campaignId, milestoneId, note));
    }
  };
};

const MilestoneConnected = connect(null, mapDipstachToProps)(Milestone);

export default MilestoneConnected;
