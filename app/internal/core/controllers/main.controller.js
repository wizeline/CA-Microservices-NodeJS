import { constants } from 'http2';
import { MainServices } from '../services/index.js';

/**
 * Callback function for performing a health check.
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 * @param {import('express').NextFunction} next - Express next middleware function.
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
