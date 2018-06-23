import React, { Component } from 'react';

import {
  Summary,
  SummaryHeader,
  SummaryBody,
  SummaryRow,
  SummaryItem,
  SummaryLabel,
  SummaryValue,
  SummaryComp
} from '../_partials/Summary';

import { formatNumber } from '../../../helpers';

class SummaryMilestone extends Component {
  render() {
    const { score, spent, reach, frequency, impressions, psr, cpv, prev = null } = this.props;

    const compScore = prev && prev.score ? score - prev.score : null;
    const compReach = prev && prev.reach ? reach - prev.reach : null;
    const compFreq = prev && prev.frequency ? frequency - prev.frequency : null;
    const compImp = prev && prev.impressions ? impressions - prev.impressions : null;
    const compPsr = prev && prev.psr ? psr - prev.psr : null;
    const compCpv = prev && prev.cpv ? cpv - prev.cpv : null;

    return (
      <Summary className="summary_milestone">
        <SummaryHeader>
          <SummaryRow>
            <SummaryItem>
              <SummaryLabel>Score</SummaryLabel>
              <SummaryValue>{formatNumber(score)}</SummaryValue>
              {compScore ? (
                <SummaryComp success={compScore > 0}>
                  {formatNumber(compScore, '+0.[00]a')}
                </SummaryComp>
              ) : (
                ''
              )}
            </SummaryItem>
          </SummaryRow>
        </SummaryHeader>
        <SummaryBody>
          <SummaryRow>
            <SummaryItem>
              <SummaryLabel>Spent</SummaryLabel>
              <SummaryValue>{formatNumber(spent)}</SummaryValue>
            </SummaryItem>
            <SummaryItem>
              <SummaryLabel>Reach</SummaryLabel>
              <SummaryValue>{formatNumber(reach)}</SummaryValue>
              {compReach ? (
                <SummaryComp success={compReach > 0}>
                  {formatNumber(compReach, '+0.[00]a')}
                </SummaryComp>
              ) : (
                ''
              )}
            </SummaryItem>
            <SummaryItem>
              <SummaryLabel>Frequency</SummaryLabel>
              <SummaryValue>{formatNumber(frequency)}</SummaryValue>
              {compFreq ? (
                <SummaryComp success={compFreq > 0}>
                  {formatNumber(compFreq, '+0.[00]a')}
                </SummaryComp>
              ) : (
                ''
              )}
            </SummaryItem>
          </SummaryRow>
          <SummaryRow>
            <SummaryItem>
              <SummaryLabel>Impressions</SummaryLabel>
              <SummaryValue>{formatNumber(impressions)}</SummaryValue>
              {compImp ? (
                <SummaryComp success={compImp > 0}>{formatNumber(compImp, '+0.[00]a')}</SummaryComp>
              ) : (
                ''
              )}
            </SummaryItem>
            <SummaryItem>
              <SummaryLabel>Psr</SummaryLabel>
              <SummaryValue>{formatNumber(psr)}</SummaryValue>
              {compPsr ? (
                <SummaryComp success={compPsr > 0}>{formatNumber(compPsr, '+0.[00]a')}</SummaryComp>
              ) : (
                ''
              )}
            </SummaryItem>
            <SummaryItem>
              <SummaryLabel>Cpv</SummaryLabel>
              <SummaryValue>{formatNumber(cpv, '0.000')}</SummaryValue>
              {compCpv ? (
                <SummaryComp success={compCpv > 0}>{formatNumber(compCpv, '+0.000')}</SummaryComp>
              ) : (
                ''
              )}
            </SummaryItem>
          </SummaryRow>
        </SummaryBody>
      </Summary>
    );
  }
}

export default SummaryMilestone;
