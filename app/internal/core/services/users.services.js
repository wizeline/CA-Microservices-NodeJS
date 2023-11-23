import {UserModel} from '../models';
import { Domain } from '../domain';

const {
  Models: { Responses },
} = Domain;

export const UserServices = {
    getById: () =>{
      return Responses.simple('This is a response from a get request');
    },
    create: () =>{
      return Responses.simple('This is a response from a post request');
    },
    update: () =>{
      return Responses.simple('This is a response from a update request');
    },
    delete: () =>{
      return Responses.simple('This is a response from a delete request');
    },
}