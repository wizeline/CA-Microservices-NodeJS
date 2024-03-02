import { constants } from 'http2';
import { UserServices } from '../services';

/**
 * Callback function for getting a user by id.
 * @function
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 * @param {import('express').NextFunction} next - Express next middleware function.
 */
const getById = (req, res, next) => {
  try {
    const message = UserServices.getById();
    res.status(constants.HTTP_STATUS_OK).json(message);
  } catch (err) {
    next(err);
  }
};

/**
 * Callback function for create a user.
 * @function
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 * @param {import('express').NextFunction} next - Express next middleware function.
 */
const create = async (req, res, next) => {
  try {
    const message = UserServices.create();
    res.status(constants.HTTP_STATUS_OK).json(message);
  } catch (err) {
    next(err);
  }
};

/**
 * Callback function for update a user.
 * @function
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 * @param {import('express').NextFunction} next - Express next middleware function.
 */
const update = async (req, res, next) => {
  try {
    const message = UserServices.update();
    res.status(constants.HTTP_STATUS_OK).json(message);
  } catch (err) {
    next(err);
  }
};

/**
 * Callback function for delete a user.
 * @function
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 * @param {import('express').NextFunction} next - Express next middleware function.
 */
const drop = async (req, res, next) => {
  try {
    const message = UserServices.deleteByID();
    res.status(constants.HTTP_STATUS_OK).json(message);
  } catch (err) {
    next(err);
  }
};

/**
 * @namespace UsersController
 * @memberof module:Controllers
 * @constant
 */
export const UsersController = {
  getById,
  create,
  update,
  delete: drop,
};
