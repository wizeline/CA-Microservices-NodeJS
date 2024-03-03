/**
 * Auth middlewares
 * @module Middlewares/Auth
 */

import { Adapters } from '../../adapters';

const tokenPaths = ['/health/', '/users/'];
const { JWT } = Adapters.Auth;

/**
 * Express middleware to check credentials on specifics routes.
 * @function
 * @param {import('express').Request} req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 * @param {import('express').NextFunction} next - The Express next function.
 * @throws {Error} If authentication fails.
 */
export const Auth = (req, res, next) => {
  const token =
    req.headers.authorization && req.headers.authorization.split(' ')[1];
  if (token !== 'undefined' && tokenPaths.includes(req.path.slice(0, 7))) {
    try {
      JWT.verifyToken(token, req.config.auth.securityKey);
      next();
    } catch (err) {
      next(err);
    }
  } else {
    next();
  }
};
