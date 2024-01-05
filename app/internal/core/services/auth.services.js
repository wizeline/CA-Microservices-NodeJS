import { Domain } from '../domain';
import { Token } from '../../adapters/auth';

const {
  Models: { Responses },
} = Domain;

/**
 * Get Token response.
 * @returns {import('../domain/models/responses.models.js').TokenResponse} The getByID response.
 */
export const AuthServices = {
    getToken:(admin_id, expires_in) =>{
      const token = Token.generateToken(admin_id, expires_in);
      return Responses.tokenResponse(token, expires_in);
    },
};