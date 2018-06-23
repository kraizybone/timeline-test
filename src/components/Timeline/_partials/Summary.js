import React from 'react';
import _ from 'lodash';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faLongArrowAltUp, faLongArrowAltDown } from '@fortawesome/fontawesome-free-solid';

export const SummaryComp = ({ children, success = undefined, className = '' }) => {
  const classes = ['summary__comp'];
  let compIcon = '';
  if (!_.isNil(success)) {
    if (success) {
      compIcon = (
        <span className="icon">
          <FontAwesomeIcon icon={faLongArrowAltUp} />
        </span>
      );
      classes.push('success');
    } else {
      compIcon = (
        <span className="icon">
          <FontAwesomeIcon icon={faLongArrowAltDown} />
        </span>
      );
      classes.push('danger');
    }
    if (className) {
      classes.push(className);
    }
  }
  return (
    <div className={classes.join(' ')}>
      {compIcon}
      {children}
    </div>
  );
};

export const SummaryValue = ({ children }) => {
  return <div className="summary__value">{children}</div>;
};

export const SummaryLabel = ({ children }) => {
  return <div className="summary__label">{children}</div>;
};

export const SummaryItem = ({ children, className = '' }) => {
  const classes = ['summary__item'];
  if (className) {
    classes.push(className);
  }
  return <div className={classes.join(' ')}>{children}</div>;
};

export const SummaryRow = ({ children }) => {
  return <div className="summary__row">{children}</div>;
};

export const SummaryHeader = ({ children }) => {
  return <div className="summary__header">{children}</div>;
};

export const SummaryBody = ({ children }) => {
  return <div className="summary__body">{children}</div>;
};

export const Summary = ({ children, className = '' }) => {
  const classes = ['summary'];
  if (className) {
    classes.push(className);
  }
  return <div className={classes.join(' ')}>{children}</div>;
};
