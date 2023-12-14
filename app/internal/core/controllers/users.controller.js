import { UserServices } from '../services';
import { constants } from 'http2';
import { Domain } from '../domain';
import {Token} from '../../../security';

const {
  Models: { Responses },
} = Domain;

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
    getToken: (req, res, next) => {
      try {
        const token = UserServices.getToken(req.body.admin_id);
        res.status(constants.HTTP_STATUS_OK).json(token);
      } catch (err) {
        next(err);
      }
    },
    getById: (req, res, next) => {
      try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token){
          res.status(constants.HTTP_STATUS_BAD_REQUEST).json("Token is not set in the endpoint")
        }
        const decoded = Token.verifyToken(token);
        if (!decoded){
          const message = UserServices.getById();
          res.status(constants.HTTP_STATUS_OK).json(message);
        }else{
          res.status(constants.HTTP_STATUS_BAD_REQUEST).json("Token is not valid or expired")
        }
      } catch (err) {
        next(err);
      }
    },
    create: async (req, res, next) => {
      {
        try {
          const message = UserServices.create();
          res.status(constants.HTTP_STATUS_OK).json(message);
        } catch (err) {
          next(err);
        }
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
}