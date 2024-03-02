import express from 'express';
import { MainController } from '../../core/controllers';

/**
 * Set up main routes.
 * @namespace Main
 * @function MainRoute
 * @param {express.Application} app - The Express application.
 * @memberof module:Routes
 */
export const MainRoute = (app) => {
  const router = express.Router();
  app.use('/', router);
  router.get('/health', MainController.healthCheck);
};
