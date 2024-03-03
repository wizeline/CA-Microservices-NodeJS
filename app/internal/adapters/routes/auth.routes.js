import express from 'express';
import { AuthController } from '../../core/controllers';

/**
 * Set up routes related to authentication.
 * @namespace Auth
 * @function AuthRoute
 * @param {express.Application} app - The Express application.
 * @memberof module:Routes
 */
export const AuthRoute = (app) => {
  const router = express.Router();
  app.use('/auth', router);
  router.get('/token', AuthController.getToken);
};
