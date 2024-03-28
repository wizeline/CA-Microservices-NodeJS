/** @module Controllers/Auth */
import { constants } from 'http2';
import { AuthServices } from '../services';

/** @typedef {import('express').Request} Request */
/** @typedef {import('express').Response} Response */
/** @typedef {import('express').NextFunction} NextFunction */

/**
 * Callback function getting a token.
 * @function
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @param {NextFunction} next - Express next middleware function.
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

export const AuthController = {
  getToken,
};
