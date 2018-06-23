import { createApolloFetch } from 'apollo-fetch';
import numeral from 'numeral';
import _ from 'lodash';

import { NUMERAL_FORMAT } from '../constants/SiteConstants';
/**
 * Custom log function.
 * Works only if APP_DEBUG config parameter is set to true
 * Otherwise log messages are ommitted
 *
 * @param message
 * @param optionalParams
 */
export const log = (message, ...optionalParams) => {
  if (process.env.DEBUG === true) {
    console.log(message, ...optionalParams);
  }
};

/**
 * Custom warn function.
 *
 * @param message
 * @param optionalParams
 */
export const warn = (message, ...optionalParams) => {
  if (process.env.DEBUG === true) {
    console.warn(message, ...optionalParams);
  }
};

/**
 * Custom error function.
 *
 * @param message
 * @param optionalParams
 */
export const error = (message, ...optionalParams) => {
  if (process.env.DEBUG === true) {
    console.error(message, ...optionalParams);
  }
};

/**
 * query GraphQL api
 *
 * @param {string} query
 * @returns {object} promise
 */
export const queryGraphQL = query => {
  const uri = process.env.REACT_APP_GRAPHQL;
  log('API_CALL [' + uri + ']');
  const apolloFetch = createApolloFetch({
    uri
  });
  return apolloFetch({ query });
};

/**
 * Format number
 * @param  {number} number
 * @param  {String} suffix
 * @param  {string} format
 */
export const formatNumber = (number, format = NUMERAL_FORMAT, suffix = '', preffix = '') => {
  let nNumeral = numeral(number);
  if (_.isNil(format)) {
    format = NUMERAL_FORMAT;
  }
  if (nNumeral.value()) {
    return preffix + nNumeral.format(format) + suffix;
  }
  return number;
};

/**
 * Little templater usign with template literals
 * @param {array} strings
 * @param {*} keys
 */
export const templater = (strings, ...keys) => {
  return function(data) {
    let temp = strings.slice();
    keys.forEach((key, i) => {
      temp[i] = temp[i] + data[key];
    });
    return temp.join('');
  };
};
