import React, { Component } from 'react';
import { fetchCampaign } from '../actions/DashboardAction';
import { connect } from 'react-redux';
import _ from 'lodash';

import Timeline from './Timeline/';

class Dashboard extends Component {
  componentDidMount() {
    const { campaign, fetchCampaignData } = this.props;
    if (_.isEmpty(campaign)) {
      fetchCampaignData();
    }
  }
  render() {
    const { campaign } = this.props;
    if (!_.isEmpty(campaign)) {
      return (
        <section className="dashboard">
          <Timeline data={campaign} />
        </section>
      );
    }
    return null;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCampaignData: () => {
      dispatch(fetchCampaign());
    }
  };
};

const mapStateToProps = state => {
  const dashboardState = state.dashboard;
  const propsToReturn = {};
  if (dashboardState.campaign) {
    propsToReturn.campaign = { ...dashboardState.campaign };
  }
  return propsToReturn;
};

const DashboardConnected = connect(mapStateToProps, mapDispatchToProps)(Dashboard);

export default DashboardConnected;
