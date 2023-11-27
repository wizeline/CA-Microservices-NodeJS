import { constants } from 'http2';

/**
 * Express middleware to handle errors and send a JSON response with the error message.
 * @param {Error} err - The error object.
 * @param {import('express').Request} _req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 * @param {import('express').NextFunction} _next - The Express next function.
 */

export const HandlerError = (err, _req, res, _next) => {
  res.json({ error: err.message });
  res.status(err.status || constants.HTTP_STATUS_INTERNAL_SERVER_ERROR);
};
