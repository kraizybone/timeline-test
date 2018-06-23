import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Goals from './Goals/';
import Milestone from './Milestone/';
import Boxoffice from './Boxoffice/';

class Timeline extends Component {
  renderMilestones() {}
  render() {
    const {
      goal,
      budget,
      actual,
      frequency,
      reach,
      createdAt,
      endedAt,
      reports = [],
      milestones = [],
      id: campaignId
    } = this.props.data;
    return (
      <section className="timeline">
        <Goals
          title="Start"
          goal={goal}
          budget={budget}
          actual={actual}
          frequency={frequency}
          reach={reach}
        />
        {milestones.map((milestone, index) => {
          let prevMilestone = index > 0 ? milestones[index - 1] : null;
          return (
            <Milestone
              {...milestone}
              campaignId={campaignId}
              prev={prevMilestone}
              startedAt={createdAt}
              endedAt={endedAt}
              key={index}
            />
          );
        })}
        {_.isNumber(actual) ? <Boxoffice goal={goal} actual={actual} reports={reports} /> : ''}
      </section>
    );
  }
}

Timeline.propTypes = {
  data: PropTypes.object.isRequired
};

export default Timeline;
