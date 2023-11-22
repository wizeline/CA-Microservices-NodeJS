import { UserServices } from "../services/users.services";
import { constants } from 'http2';
import { Domain } from '../domain';

const {
  Models: { Responses },
} = Domain;

export const UsersController = {
    getById: async (req, res, next) => {
      try {
        //const ids = req.params.id.split(',').map(Number);
        //const users = await UserServices.getById(ids, req.config.users.api);
        //req.dataBase.connection.close()
        const message = Responses.simple('This is a response from a getID request')
        res.status(constants.HTTP_STATUS_OK).json(message);
        //if (users.length) {
        //  res.status(200).json(users);
        //} else {
        //  res.status(404).json({});
        //}
      } catch (err) {
        next(err);
      }
    },
    create: async (req, res, next) => {
      {
        try {
          // const newUser = await UserServices.create(req.body);
          const message = Responses.simple('This is a response from a post request')
          res.status(constants.HTTP_STATUS_OK).json(message);
        } catch (err) {
          next(err);
        }
      }
    },
    update: async (req, res, next) => {
      try {
        //const reponse = await UserServices.update(req.params.id, req.body);
        //req.dataBase.connection.close()
        const message = Responses.simple('This is a response from a update request')
        res.status(constants.HTTP_STATUS_OK).json(message);
        //if (reponse.user) {
        //  res.status(200).json(reponse.user);
        //} else {
        //  res.status(304).json({});
        //}
      } catch (err) {
        next(err);
      }
    },
    delete: async (req, res, next) => {
      try {
        //const reponse = await UserServices.delete(req.params.id);
        //req.dataBase.connection.close()
        const message = Responses.simple('This is a response from a delete request')
        res.status(constants.HTTP_STATUS_OK).json(message);
        //if (reponse.user) {
        //  res.status(200).json(reponse.user);
        //} else {
        //  res.status(304).json({});
        //}
      } catch (err) {
        next(err);
      }
    },
}