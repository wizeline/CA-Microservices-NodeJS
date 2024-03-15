/**
 * Auth middlewares
 * @module Models/Responses
 */

/**
 * Represents a simple response object.
 * @typedef {object} SimpleResponse
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
 * @typedef {object} TokenResponse
 * @property {string} accessToken - The token created.
 * @property {string} expiresIn - The expiration time of the toke.
 * @property {string} tokenType - The token type for the request, by default is Bearer.
 */

/**
 * Creates a token response object.
 * @param {string} token - The token created with the expiration time.
 * @param {string} expiresIn - The expiration time of the token.
 * @returns {TokenResponse} The token response with the information about the token created.
 */
const tokenResponse = (token, expiresIn) => ({
  accessToken: token,
  expiresIn,
  tokenType: 'Bearer',
});

/**
 * Represents a token response object.
 * @typedef {object} UserResponse
 * @property {string} id - The user id.
 * @property {string} firstName - User first name.
 * @property {string} lastName - User last name.
 * @property {string} email - User email.
 */

/**
 * Creates a token response object.
 * @param {string} success - A simple flag.
 * @param {string} message - A simple message about the response.
 * @param {Map} user - The user information from the database.
 * @param {string} id - The id in UUID form of the user.
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last_name of the user.
 * @param {string} email - The email from the user.
 * @returns {UserResponse} The user response with the information about the user.
 */

const userResponse = (id, firstName, lastName, email) => ({
  success: true,
  message: 'Success',
  user: {
    id,
    firstName,
    lastName,
    email,
  },
});

export const Responses = {
  simple,
  tokenResponse,
  userResponse,
};
