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

  /**
   * @swagger
   * /auth/token:
   *   get:
   *     description: Returns token
   *     tags:
   *       - Auth
   *     responses:
   *       200:
   *         description: A token
   *         content:
   *         application/json:
   *          schema:
   *            $ref: '#/components/schemas/AuthTokenResponse'
   *       500:
   *         $ref: '#/components/responses/InternalServerError'
   */
  router.get('/token', AuthController.getToken);
};
