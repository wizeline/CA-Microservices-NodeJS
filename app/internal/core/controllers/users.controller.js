import { constants } from 'http2';
import { UserServices } from '../services';

/**
 * Callback function for performing a CRUD.
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 * @param {import('express').NextFunction} next - Express next middleware function.
 * @function getByID - Obtain the information of a user using an ID.
 * @function create - Create a new user.
 * @function update - RRefresh the information of  a user using  his ID.
 * @function delete - Delete the information of a user using his ID.
 */
export const UsersController = {
  getById: (req, res, next) => {
    try {
      const message = UserServices.getById();
      res.status(constants.HTTP_STATUS_OK).json(message);
    } catch (err) {
      next(err);
    }
  },
  create: async (req, res, next) => {
    try {
      const message = UserServices.create();
      res.status(constants.HTTP_STATUS_OK).json(message);
    } catch (err) {
      next(err);
    }
  },
  update: async (req, res, next) => {
    try {
      const message = UserServices.update();
      res.status(constants.HTTP_STATUS_OK).json(message);
    } catch (err) {
      next(err);
    }
  },
  delete: async (req, res, next) => {
    try {
      const message = UserServices.delete();
      res.status(constants.HTTP_STATUS_OK).json(message);
    } catch (err) {
      next(err);
    }
  },
};
