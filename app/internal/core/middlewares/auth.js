import { JWT } from '../../adapters/auth';

const tokenPaths = ['/health/', '/users/'];

/**
 * Express middleware to check credentials on specifics routes.
 * @param {import('express').Request} req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 * @param {import('express').NextFunction} next - The Express next function.
 */
export const Auth = (req, res, next) => {
  const token =
    req.headers.authorization && req.headers.authorization.split(' ')[1];
  if (token !== 'undefined' && tokenPaths.includes(req.path.slice(0, 7))) {
    try {
      JWT.verifyToken(token, req.defaultConfig.auth.secretKey);
      next();
    } catch (err) {
      next(err);
    }
  } else {
    next();
  }
};
