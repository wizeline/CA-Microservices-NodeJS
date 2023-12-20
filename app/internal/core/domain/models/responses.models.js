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

/**
 * Represents a simple response object.
 * @typedef {Object} TokenResponse
 * @property {string} token - The token created with the expiration time.
 */

/**
 * Creates a simple response object.
 * @param {string} token - The token created with the expiration time.
 * @returns {SimpleResponse} The token created response.
 */

const tokenResponse = (token, expires_in) =>({
  access_token: token,
  expires_in: expires_in,
  token_type: "Bearer"
});

export const Responses = {
  simple,
  tokenResponse,
};
