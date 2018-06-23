import React, { Component } from 'react';
import _ from 'lodash';

import Header from './_partials/Header';
import Body from './_partials/Body';

import { CREATIVES_TYPES } from '../../../../constants/CreativesConstants';

class Creatives extends Component {
  render() {
    const { data } = this.props;
    const groups = _.groupBy(data, 'type');
    if (!_.isEmpty(groups)) {
      return _.map(groups, (group, type) => {
        const label = CREATIVES_TYPES[type] || '';
        return (
          <section className="creatives" key={'creatives-' + type}>
            <Header label={label} />
            <Body rows={group} />
          </section>
        );
      });
    }
    return null;
  }
}

export default Creatives;
