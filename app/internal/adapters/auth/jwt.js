import jsonwebtoken from 'jsonwebtoken';

/**
 * Generates a JSON Web Token (JWT) for the specified admin ID and expiration time.
 *
 * @function
 * @memberof JWT
 * @param {string} adminID - The ID of the admin for whom the token is generated.
 * @param {string | number} expiresIn - The expiration time for the token (e.g., '2h', '7d', or a timestamp).
 * @param {string} secretKey - Security secretKey.
 * @returns {string} The generated JWT.
 */
const generateToken = (adminID, expiresIn, secretKey) =>
  jsonwebtoken.sign({ id: adminID }, secretKey, {
    expiresIn,
  });

/**
 * Verifies the authenticity of a JSON Web Token (JWT).
 *
 * @function
 * @memberof JWT
 * @param {string} token - The JWT to be verified.
 * @param {string} secretKey - The JWT secretKey used to be verify.
 * @returns {object} The decoded payload of the verified JWT.
 * @throws {Error} If the token verification fails.
 */
const verifyToken = (token, secretKey) => jsonwebtoken.verify(token, secretKey);

/**
 * JSON Web Token (JWT) utility functions for token generation and verification.
 *
 * @namespace
 * @typedef {Object} JWT
 * @property {function} generateToken - Function to generate a JWT.
 * @property {function} verifyToken - Function to verify the authenticity of a JWT.
 */

export const JWT = {
  generateToken,
  verifyToken,
};
