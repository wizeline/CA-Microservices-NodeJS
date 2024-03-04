/** @module Services/Users */

import { Domain } from '../domain';
import {v4 as uuidv4} from 'uuid';

const {
  Models: { Responses },
} = Domain;

/**
 * Get user by ID.
 * @function
 * @param {db} db - DB client for the connection to the database.
 * @param {string} id - The UUID for the user in the database.
 * @returns {import('../domain/models/responses.models.js').UserResponse} The response for the get by ID request.
 */
const getById = async (db, id) => {
  try{
    const query = 'SELECT id, first_name, last_name, email FROM users WHERE id=$1';
    const result = await db.query(query, [id]);
    if (result.rows.length === 0) {
      return Responses.simple(`User with ${id} is not in the database.`);
    } else {
      return Responses.userResponse(id,result.rows[0].first_name, result.rows[0].last_name, result.rows[0].email);
    }
  } catch (error) {
    return error;
  }
}

/**
 * Create a new user.
 * @function
 * @param {db} db - DB client for the connection to the database.
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @param {string} email - The email from the user.
 * @returns {import('../domain/models/responses.models.js').userResponse} The response for the create request.
 */
const create = (db, firstName, lastName, email) => {
  const randomUuid = uuidv4();
  const query = 'INSERT INTO users (id, first_name, last_name, email) VALUES ($1, $2, $3, $4)';
  db.query(query, [randomUuid, firstName, lastName, email]);
  return Responses.userResponse(randomUuid, firstName, lastName, email);
};

/**
 * Update an existing user.
 * @function
 * @param {db} db - DB client for the connection to the database.
 * @param {string} id - The id of the user.
 * @param {Map} body - THe fields to be updated.
 * @returns {import('../domain/models/responses.models.js').SimpleResponse} The response for the update request.
 */
const update = async (db, id, body) =>{
  try{
    const updates = [];
    const values = [id];
    let index = 2;
    for (const value in body) {
      updates.push(`${value} = $${index}`);
      values.push(body[value]);
      index++;
    }
    const query = `UPDATE users SET ${updates.join(',')} WHERE id = $1`;
    db.query(query, values);
    return Responses.simple(`User with ${id} has been updated.`)
  } catch (error) {
    return error;
  }
}

/**
 * Delete a user by ID.
 * @function
 * @returns {import('../domain/models/responses.models.js').SimpleResponse} The response for the delete request.
 */
const deleteByID = async (db, id) =>{
  try{
    const query = 'SELECT id FROM users WHERE id=$1';
    const result = await db.query(query, [id]);
    if (result.rows.length === 0) {
        return Responses.simple(`User with ${id} is not in the database.`);
    } else{
      const query = 'DELETE FROM users WHERE id = $1';
      db.query(query, [id]);
      return Responses.simple(`User with ${id} has been deleted.`);
    }
  } catch (error) {
    return error;
  }
}


export const UserServices = { getById, create, update, deleteByID };
