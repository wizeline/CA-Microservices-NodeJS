import express from 'express';
import { UsersController } from '../../core/controllers';

/**
 * {
 * Set up routes related to Users CRUD operations
 * @namespace Users
 * @function UsersRoute
 * @param {express.Application} app - The Express application.
 * @memberof module:Routes
 */
export const UsersRoute = (app) => {
  const router = express.Router();
  app.use('/users', router);

  /**
   * @swagger
   * /users/{id}:
   *   get:
   *     description: Returns a user by id
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *         description: ID of the user to get
   *     security:
   *       - bearerAuth: []
   *     tags:
   *       - Users
   *     responses:
   *       200:
   *         description: User info
   *         content:
   *         application/json:
   *          schema:
   *            $ref: '#/components/schemas/DefaultResponse'
   *       401:
   *         $ref: '#/components/responses/UnauthorizedError'
   *       500:
   *         $ref: '#/components/responses/InternalServerError'
   */
  router.get('/:id', UsersController.getById);

  /**
   * @swagger
   * /users:
   *   post:
   *     description: Create new user
   *     requestBody:
   *       description: User request body
   *       required: true
   *       content:
   *          application/json:
   *            schema:
   *              $ref: '#/definitions/User'
   *     tags:
   *       - Users
   *     responses:
   *       200:
   *         description: A User response
   *         content:
   *         application/json:
   *          schema:
   *            $ref: '#/components/schemas/UserResponse'
   *       401:
   *         $ref: '#/components/responses/UnauthorizedError'
   *       500:
   *         $ref: '#/components/responses/InternalServerError'
   */
  router.post('/', UsersController.create);

  /**
   * @swagger
   * /users/{id}:
   *   put:
   *     description: Update the user info by id
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *         description: ID of the user to update
   *     requestBody:
   *       description: User request body
   *       required: true
   *       content:
   *          application/json:
   *            schema:
   *              $ref: '#/definitions/User'
   *     tags:
   *       - Users
   *     responses:
   *       201:
   *         description: User info
   *         content:
   *         application/json:
   *          schema:
   *            $ref: '#/components/schemas/DefaultResponse'
   *       401:
   *         $ref: '#/components/responses/UnauthorizedError'
   *       500:
   *         $ref: '#/components/responses/InternalServerError'
   */
  router.put('/:id', UsersController.update);

  /**
   * @swagger
   * /users/{id}:
   *   delete:
   *     description: Delete an user by id
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *         description: ID of the user to delete
   *     tags:
   *       - Users
   *     responses:
   *       200:
   *         $ref: '#/components/responses/Accepted'
   *       401:
   *         $ref: '#/components/responses/UnauthorizedError'
   *       500:
   *         $ref: '#/components/responses/InternalServerError'
   */
  router.delete('/:id', UsersController.delete);
};
