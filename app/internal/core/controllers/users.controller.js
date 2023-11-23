import { UserServices } from '../services';
import { constants } from 'http2';
import { Domain } from '../domain';

const {
  Models: { Responses },
} = Domain;

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