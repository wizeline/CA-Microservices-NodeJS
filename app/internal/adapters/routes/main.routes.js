import express from 'express';
import { MainController } from '../../core/controllers/index.js';

/**
 * Create a new instance of MainRoutes.
 * @param {express.Application} app - The Express application instance.
 */
export const MainRoute = (app) => {
  const router = express.Router();
  app.use('/', router);
  router.get('/health', MainController.healthCheck);
};
