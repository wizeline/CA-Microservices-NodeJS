/**
 * Represents a simple response object.
 * @typedef {Object} SimpleResponse
 * @property {string} message - The message associated with the response.
 */

/**
 * Creates a simple response object.
 * @param {string} message - The message to be included in the response.
 * @returns {SimpleResponse} A simple response object.
 */
const simple = (message) => ({
  message,
});

export const Responses = {
  simple,
};
