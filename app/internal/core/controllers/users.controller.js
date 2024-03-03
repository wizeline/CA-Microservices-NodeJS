import { constants } from 'http2';
import { UserServices } from '../services';
import { UserModel } from '../models';

/**
 * Callback function for getting a user by id.
 * @function
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 * @param {import('express').NextFunction} next - Express next middleware function.
 */
const getById = async (req, res, next) => {
  try {
    const message = await UserServices.getById(req.db.client, req.params.id);
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
    const err =  UserModel.validate(req.body)
    if (err.error) {
      throw new Error(`Request is not correct`);
    }
    const { first_name, last_name, email } = req.body;
    const newUser = new UserModel({
      email: email,
      first_name: first_name,
      last_name: last_name,
    });
    const message = UserServices.create(
      req.db.client,
      newUser.first_name,
      newUser.last_name,
      newUser.email,
    );
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
    const message = await UserServices.update(req.db.client, req.params.id, req.body);
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
    const message = await UserServices.deleteByID(req.db.client, req.params.id);
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
