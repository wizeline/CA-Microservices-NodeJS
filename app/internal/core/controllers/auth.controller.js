/** @module Controllers */
import { constants } from 'http2';
import { AuthServices } from '../services';

/**
 * Callback function getting a token.
 * @function
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 * @param {import('express').NextFunction} next - Express next middleware function.
 */
const getToken = (req, res, next) => {
  try {
    const token = AuthServices.getToken(
      req.body.adminId,
      req.config.auth.expiresIn,
      req.config.auth.securityKey,
    );
    res.status(constants.HTTP_STATUS_OK).json(token);
  } catch (err) {
    next(err);
  }
};

/**
 * @namespace AuthController
 * @memberof module:Controllers
 * @constant
 */
export const AuthController = {
  getToken,
};
