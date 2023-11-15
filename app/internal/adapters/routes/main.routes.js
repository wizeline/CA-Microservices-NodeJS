import express from 'express';
import Controller from '../../core/controllers/index.js';

/**
 * Class representing the main routes for the application.
 */
class MainRoutes {
  /**
   * Create a new instance of MainRoutes.
   * @param {express.Application} app - The Express application instance.
   */
  constructor() {
    this.router = express.Router();
    this.controller = Controller.MainController;
    this.initialize();
  }

  /**
   * Initialize the routes
   */
  initialize() {
    this.router.get('/health', this.controller.healthCheck);
  }

  getRouter() {
    return this.router;
  }
}

export default MainRoutes;
