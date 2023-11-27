import { createLogger, format, transports } from 'winston';

const { combine, timestamp, printf } = format;

/**
 * Log format for Winston logger.
 * @callback LogFormat
 * @param {Object} info - Log information.
 * @param {string} info.level - Log level.
 * @param {string} info.message - Log message.
 * @param {string} info.timestamp - Log timestamp.
 * @returns {string} - Formatted log entry.
 */

/**
 * The Winston logger instance
 * @type {import('winston').Logger}
 */
const newLogger = createLogger({
  transports: [new transports.Console()],
  format: combine(
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss.SSS',
    }),
    printf(
      ({ level, message, timestamp: time }) =>
        `${time} [${level.toUpperCase()}] ${JSON.stringify(message)}`,
    ),
  ),
});

/**
 * Express middleware to attach the logger to the request object.
 * @param {import('express').Request} req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 * @param {import('express').NextFunction} next - The Express next function.
 */
export const Logger = (req, res, next) => {
  req.logger = newLogger;
  req.logger.info(req.path);
  next();
};
