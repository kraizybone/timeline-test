import React from 'react';

import SummaryGoals from './SummaryGoals.js';

export default ({ title, goal, budget, reach, frequency }) => (
  <section className="timeline__detail">
    <section className="detail__item detail__item-goals">
      <div className="item__title">{title}</div>
      <SummaryGoals goal={goal} budget={budget} reach={reach} frequency={frequency} />
    </section>
  </section>
);
