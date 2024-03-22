/** @module Controllers/Users */

import { constants } from 'http2';
import { UserServices } from '../services';
import { UserModel } from '../models';

/** @typedef {Request} Request */
/** @typedef {Response} Response */
/** @typedef {NextFunction} NextFunction */

/**
 * Callback function for getting a user by id.
 * @function
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @param {NextFunction} next - Express next middleware function.
 */
const getById = async (req, res, next) => {
  try {
    const message = await UserServices.getById(req.db.client, req.params.id);
    res.status(constants.HTTP_STATUS_OK).json(message);
  } catch (err) {
    next({ message: err, status: constants.HTTP_STATUS_BAD_REQUEST });
  }
};

/**
 * Callback function for create a user.
 * @function
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @param {NextFunction} next - Express next middleware function.
 */
const create = async (req, res, next) => {
  try {
    const request = {
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      email: req.body.email,
    };
    const err = await UserModel.validate(request);
    if (err.error) {
      throw new Error(`Request is not correct`);
    }
    const newUser = new UserModel(request);
    const message = await UserServices.create(
      req.db.client,
      newUser.first_name,
      newUser.last_name,
      newUser.email,
    );
    res.status(constants.HTTP_STATUS_OK).json(message);
  } catch (err) {
    next({ message: err, status: constants.HTTP_STATUS_BAD_REQUEST });
  }
};

/**
 * Callback function for update a user.
 * @function
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @param {NextFunction} next - Express next middleware function.
 */
const update = async (req, res, next) => {
  try {
    const message = await UserServices.update(
      req.db.client,
      req.params.id,
      req.body,
    );
    res.status(constants.HTTP_STATUS_CREATED).json(message);
  } catch (err) {
    next({ message: err, status: constants.HTTP_STATUS_BAD_REQUEST });
  }
};

/**
 * Callback function for delete a user.
 * @function
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @param {NextFunction} next - Express next middleware function.
 */
const drop = async (req, res, next) => {
  try {
    const message = await UserServices.deleteByID(req.db.client, req.params.id);
    res.status(constants.HTTP_STATUS_OK).json(message);
  } catch (err) {
    next(err);
  }
};

export const UsersController = {
  getById,
  create,
  update,
  delete: drop,
};
