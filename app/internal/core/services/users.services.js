import { Domain } from '../domain';

const {
  Models: { Responses },
} = Domain;

/**
 * Get by ID response.
 * @returns {import('../domain/models/responses.models.js').SimpleResponse} The getByID response.
 * Create response.
 * @returns {import('../domain/models/responses.models.js').SimpleResponse} The create response.
 * Update response.
 * @returns {import('../domain/models/responses.models.js').SimpleResponse} The update response.
 * Delete response.
 * @returns {import('../domain/models/responses.models.js').SimpleResponse} The delete response.
 */
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