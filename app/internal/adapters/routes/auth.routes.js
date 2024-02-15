/**
 * @module Routes/Auth
 */

import express from 'express';
import { AuthController } from '../../core/controllers';

/**
 * Set up routes related to authentication.
 * @function AuthRoute
 * @param {express.Application} app - The Express application.
 */
export const AuthRoute = (app) => {
  const router = express.Router();
  app.use('/auth', router);
  router.get('/token', AuthController.getToken);
};
