import React from 'react';

import {
  Summary,
  SummaryBody,
  SummaryRow,
  SummaryItem,
  SummaryLabel,
  SummaryValue
} from '../_partials/Summary';

import { formatNumber } from '../../../helpers';

export default ({ goal, budget, reach, frequency }) => {
  return (
    <Summary className="summary_goals">
      <SummaryBody>
        <SummaryRow>
          <SummaryItem>
            <SummaryLabel>Box Office Goal</SummaryLabel>
            <SummaryValue>{formatNumber(goal, null, '', '$')}</SummaryValue>
          </SummaryItem>
          <SummaryItem>
            <SummaryLabel>Budget</SummaryLabel>
            <SummaryValue>{formatNumber(budget, null, '', '$')}</SummaryValue>
          </SummaryItem>
          <SummaryItem>
            <SummaryLabel>Reach</SummaryLabel>
            <SummaryValue>{formatNumber(reach)}</SummaryValue>
          </SummaryItem>
          <SummaryItem>
            <SummaryLabel>frequency</SummaryLabel>
            <SummaryValue>{frequency + 'x'}</SummaryValue>
          </SummaryItem>
        </SummaryRow>
      </SummaryBody>
    </Summary>
  );
};
