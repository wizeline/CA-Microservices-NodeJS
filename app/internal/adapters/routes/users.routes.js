import express from 'express';
import { UsersController } from '../../core/controllers';

/**
 * Set up routes related to Users CRUD operations
 * @namespace Users
 * @function UsersRoute
 * @param {express.Application} app - The Express application.
 * @memberof module:Routes
 */
export const UsersRoute = (app) => {
  const router = express.Router();
  app.use('/users', router);

  // List by id
  router.get('/:id', UsersController.getById);
  // Create a new user
  router.post('/', UsersController.create);
  // Edit User
  router.put('/:id', UsersController.update);
  // Delete user
  router.delete('/:id', UsersController.delete);
};
