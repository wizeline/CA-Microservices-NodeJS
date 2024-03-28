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
  /**
   * @swagger
   * /health:
   *   get:
   *     description: Returns server health
   *     tags:
   *       - Main
   *     responses:
   *       201:
   *         description: A User object
   *         content:
   *         application/json:
   *          schema:
   *            $ref: '#/components/schemas/DefaultResponse'
   *       500:
   *         $ref: '#/components/responses/InternalServerError'
   */
  router.get('/health', MainController.healthCheck);
};
