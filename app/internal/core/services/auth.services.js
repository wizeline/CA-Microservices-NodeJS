import { Domain } from '../domain';
import { JWT } from '../../adapters/auth';

const {
  Models: { Responses },
} = Domain;

/**
 * Get Token response.
 * @returns {import('../domain/models/responses.models.js').TokenResponse} The getByID response.
 */
export const AuthServices = {
  /**
   * @param {string} adminID - The ID of the admin for whom the token is generated.
   * @param {string} secretKey - secretKey to be used to create the token
   * @param {string | number} expiresIn - The expiration time for the token (e.g., '2h', '7d', or a timestamp).
   */
  getToken: (adminID, expiresIn, secretKey) => {
    const token = JWT.generateToken(adminID, expiresIn, secretKey);
    return Responses.tokenResponse(token, expiresIn);
  },
};
