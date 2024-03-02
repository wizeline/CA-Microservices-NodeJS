/** @module Models/Users */

import { model, Schema } from 'mongoose';
/**
 * Create User Schema is the schema for the request body.
 * @constant {Schema} createUserSchema
 */
const createUserSchema = new Schema(
  {
    Id: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    company: String,
    url: String,
    text: String,
  },
  { timestamps: true, versionKey: false },
);

export const UserModel = model('User', createUserSchema);
