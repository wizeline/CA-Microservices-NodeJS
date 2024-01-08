import { AuthServices } from '../services';
import { constants } from 'http2';

/**
 * Callback function for performing a CRUD.
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 * @param {import('express').NextFunction} next - Express next middleware function.
 * @function getToken - Obtain the JWT token.
 */
export const AuthController = {
    getToken: (req, res, next) => {
      try {
        const token = AuthServices.getToken(req.body.admin_id, req.body.expires_in);
        res.status(constants.HTTP_STATUS_OK).json(token);
      } catch (err) {
        next(err);
      }
    },
};