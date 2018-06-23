import React from 'react';

import Report from '../_partials/Report.js';
import SummaryBoxoffice from './SummaryBoxoffice.js';

export default ({ title = 'boxoffice', goal, actual, reports }) => {
  return (
    <section className="timeline__detail">
      <section className="detail__item detail__item-boxoffice">
        <div className="item__title">{title}</div>
        <SummaryBoxoffice goal={goal} actual={actual} />
      </section>
      <section className="detail__item">
        <div className="item__title">Reports</div>
        {reports.map((report, i) => {
          return <Report data={report} key={i} />;
        })}
      </section>
    </section>
  );
};
