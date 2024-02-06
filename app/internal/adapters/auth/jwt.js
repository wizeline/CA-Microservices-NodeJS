/**
 * @module Auth/JWT
 */

import jsonwebtoken from 'jsonwebtoken';

/**
 * Generates a JSON Web Token (JWT) for the specified admin ID and expiration time.
 * @function
 * @param {string} adminID - The ID for whom the token is generated.
 * @param {string | number} expiresIn - The expiration time for the token (e.g., '2h', '7d', or a timestamp).
 * @param {string} secretKey - The secret key used to sign the JWT token.
 * @returns {string} The generated JWT token.
 */
const generateToken = (adminID, expiresIn, secretKey) =>
  jsonwebtoken.sign({ id: adminID }, secretKey, {
    expiresIn,
  });

/**
 * Verifies the authenticity of a JWT token.
 * @function
 * @param {string} token - The JWT token to be verified.
 * @param {string} secretKey - The secret key used to verify the JWT token.
 * @returns {string} The decoded payload of the verified JWT.
 * @throws {Error} If the token is invalid or has expired.
 */
const verifyToken = (token, secretKey) => jsonwebtoken.verify(token, secretKey);

export const JWT = {
  generateToken,
  verifyToken,
};
