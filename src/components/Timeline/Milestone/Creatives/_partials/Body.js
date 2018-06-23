import React from 'react';
import _ from 'lodash';

import { Sparklines, SparklinesLine } from 'react-sparklines';

import { formatNumber } from '../../../../../helpers';

export default ({ rows }) => {
  return (
    <section className="creatives__body">
      {_.map(rows, (row, i) => {
        return (
          <section className="creatives__row" key={i}>
            <section className="creatives__cell creatives__cell-name">
              <div className="image-wrapper">
                <img src="https://placeimg.com/30/30/tech" alt="" />
              </div>
              <div className="text-wrapper">
                <div className="label">{row.label}</div>
                <div className="name">{row.name}</div>
              </div>
            </section>
            <section className="creatives__cell">{formatNumber(row.psr)}</section>
            <section className="creatives__cell">
              <div className="spark">
                <Sparklines data={[5, 10, 5, 20]}>
                  <SparklinesLine style={{ fill: 'none', strokeWidth: 5 }} color="green" />
                </Sparklines>
              </div>
              {formatNumber(row.views, '0%')}
            </section>
            <section className="creatives__cell">{formatNumber(row.cpv)}</section>
          </section>
        );
      })}
    </section>
  );
};
