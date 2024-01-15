import { defaultConfig } from '../providers';

/**
 * Express middleware to attach the configurations to the request object.
 * @param {import('express').Request} req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 * @param {import('express').NextFunction} next - The Express next function.
 */
export const Configurations = (req, res, next) => {
  req.config = defaultConfig;
  next();
};
