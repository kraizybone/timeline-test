import React from 'react';

import {
  Summary,
  SummaryBody,
  SummaryRow,
  SummaryItem,
  SummaryLabel,
  SummaryValue,
  SummaryComp
} from '../_partials/Summary';

import { formatNumber } from '../../../helpers';

export default ({ goal, actual }) => {
  const compTotalPercentage = actual / goal;
  return (
    <Summary className="summary_boxoffice">
      <SummaryBody>
        <SummaryRow>
          <SummaryItem>
            <SummaryLabel>Goal</SummaryLabel>
            <SummaryValue>{formatNumber(goal, '0,0')}</SummaryValue>
          </SummaryItem>
          <SummaryItem className="summary__item-inline-value">
            <SummaryLabel>Actual</SummaryLabel>
            <SummaryValue>{formatNumber(actual, '0,0')}</SummaryValue>
            {compTotalPercentage ? (
              <SummaryComp success={compTotalPercentage > 0}>
                {formatNumber(compTotalPercentage, '0%')}
              </SummaryComp>
            ) : (
              ''
            )}
          </SummaryItem>
        </SummaryRow>
      </SummaryBody>
    </Summary>
  );
};
