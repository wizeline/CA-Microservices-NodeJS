import express from 'express';
import { AuthController } from '../../core/controllers';

/**
 * Create a new instance of UserRoutes.
 * @param {express.Application} app - The Express application instance.
 */
export const AuthRoute = (app) => {
  const router = express.Router();
  app.use('/auth', router);

  // Get Token
  router.get('/token', AuthController.getToken);
};
