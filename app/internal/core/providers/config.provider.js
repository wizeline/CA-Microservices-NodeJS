/** @module Providers */

/**
 * Default configuration object.
 * @typedef {object} DefaultConfig
 * @property {object} auth - Authentication configuration.
 * @property {string} auth.securityKey - Security key for authentication.
 * @property {number} auth.expiresIn - Expiration time for authentication in seconds.
 */

/**
 * Default configuration for the application.
 * @namespace defaultConfig
 * @memberof module:Providers
 * @type {DefaultConfig}
 * @constant
 */
export const defaultConfig = {
  auth: {
    securityKey: process.env.SECRET_KEY,
    expiresIn: process.env.EXPIRES_IN,
  },
  db: {
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DB,
  },
};
