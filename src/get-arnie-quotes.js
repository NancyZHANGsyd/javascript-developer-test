const { httpGet } = require('./mock-http-interface');

const ResultKeyEnum = {
  SUCCESS: 'Arnie Quote',
  FAILURE: 'FAILURE',
};

/**
 * Get a single Arnie Quote for a provided url
 * @param url - single url, validation is omit in this case
 * @returns {Promise<*>}
 */
const getArnieQuote = async (url) => {
  const res = await httpGet(url);
  const key = res.status === 200 ? ResultKeyEnum.SUCCESS : ResultKeyEnum.FAILURE;
  return { [key]: JSON.parse(res.body).message };
};

/**
 * Get a list of Arnie Quotes for provided urls
 * @param urls - Array of urls, validation is omit in this case
 * @returns {Promise<[]>}
 */
const getArnieQuotes = async (urls) => {
  return Promise.all(urls.map(url => getArnieQuote(url)));
};

module.exports = {
  getArnieQuotes,
};
