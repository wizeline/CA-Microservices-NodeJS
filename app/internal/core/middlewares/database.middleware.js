/**
 * Auth middlewares
 * @module Middlewares/Database
 */

import { Pool } from 'pg';
import { constants } from 'http2';

/**
 * Express middleware to create the connection to the database.
 * @function
 * @param {import('express').Request} req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 * @param {import('express').NextFunction} next - The Express next function.
 * @throws {Error} If authentication fails.
 */
export const DatabaseConnection = (req, res, next) => {
  const { user, password, host, port, database } = req.config.db;
  try {
    const dbConfig = {
      user,
      password,
      host,
      port,
      database,
    };
    const pool = new Pool(dbConfig);
    pool.connect((err, client, release) => {
      if (err) {
        next({
          message: err,
          code: constants.HTTP_STATUS_INTERNAL_SERVER_ERROR,
        });
      }
      req.db = { client, release };
      next();
    });
  } catch (ex) {
    next({
      message: ex,
      code: constants.HTTP_STATUS_INTERNAL_SERVER_ERROR,
    });
  }
};
