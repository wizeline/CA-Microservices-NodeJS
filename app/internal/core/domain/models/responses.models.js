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
 * Represents a token response object.
 * @typedef {Object} TokenResponse
 * @property {string} access_token - The token created.
 * @property {string} expires_in - The expiration time of the toke.
 * @property {string} token_type - The token type for the request, by default is Bearer.
 */

/**
 * Creates a token response object.
 * @param {string} token - The token created with the expiration time.
 * @property {string} expires_in - The expiration time of the token.
 * @returns {TokenResponse} The token response with the information about the token created.
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
