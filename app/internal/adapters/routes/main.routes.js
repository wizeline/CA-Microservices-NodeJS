/**
 * @module Routes/Main
 */

import express from 'express';
import { MainController } from '../../core/controllers';

/**
 * Set up main routes.
 * @function MainRoute
 * @param {express.Application} app - The Express application.
 */
export const MainRoute = (app) => {
  const router = express.Router();
  app.use('/', router);
  router.get('/health', MainController.healthCheck);
};
