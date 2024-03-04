/**
 * Auth middlewares
 * @module Middlewares/Database
 */

import {Pool} from "pg";

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
            user: user,
            password: password,
            host: host,
            port: port,
            database: database
        };
        const client = new Pool(dbConfig);
        client.connect((err, client, release) => {
            if (err) {
                console.error('Error connecting to PostgreSQL database:', err);
                return res.status(500).send('Error connecting to database');
            }
            console.log('Connected to PostgreSQL database');
            req.db = { client, release };
            next();
        });
    } catch (ex) {
        console.error('Error connecting to PostgreSQL database:', ex);
        res.status(500).send();
    }
  };