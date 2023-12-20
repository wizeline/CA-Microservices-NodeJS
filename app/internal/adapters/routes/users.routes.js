import express from "express";
import { UsersController } from "../../core/controllers";

/**
 * Create a new instance of UserRoutes.
 * @param {express.Application} app - The Express application instance.
 */
export const UsersRoute = (app) =>{
    const router = express.Router();
    app.use('/users', router);
    
    //List by id
    router.get('/:id', UsersController.getById);
    // Create a new user
    router.post('/', UsersController.create)
    //Edit User
    router.put('/:id', UsersController.update);
    //Delete user
    router.delete('/:id', UsersController.delete);
};