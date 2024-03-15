/** @module Controllers/Main */

import { constants } from 'http2';
import { MainServices } from '../services';

/** @typedef {import('express').Request} Request */
/** @typedef {import('express').Response} Response */
/** @typedef {import('express').NextFunction} NextFunction */

/**
 * Callback function the health check.
 * @function
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @param {NextFunction} next - Express next middleware function.
 */
const healthCheck = (req, res, next) => {
  try {
    const message = MainServices.getHealthCheck();
    res.status(constants.HTTP_STATUS_OK).json(message);
  } catch (err) {
    next(err);
  }
};

export const MainController = {
  healthCheck,
};
