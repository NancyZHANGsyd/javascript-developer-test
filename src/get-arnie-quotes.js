const { httpGet } = require('./mock-http-interface');

const ResultKeyEnum = {
  SUCCESS: 'Arnie Quote',
  FAILURE: 'FAILURE',
};

/**
 * Get a single Arnie Quote for a provided url
 * @param {string} url - single url to be requested, validation is omit in this case
 * @returns {Promise<*>} 
 */
const getArnieQuote = async (url) => {
  const res = await httpGet(url);
  const key = res.status === 200 ? ResultKeyEnum.SUCCESS : ResultKeyEnum.FAILURE;
  return { [key]: JSON.parse(res.body).message };
};

/**
 * Get a list of Arnie Quotes for provided urls
 * @param {string[]} urls - Array of urls to be requested, validation is omit in this case
 * @returns {Promise<[]>}
 */
const getArnieQuotes = async (urls) => {
  return Promise.all(urls.map(url => getArnieQuote(url)));
};

module.exports = {
  getArnieQuotes,
};
