import express from 'express';

/**
 * Class representing the main routes for the application.
 */
class MainRoutes {
  /**
   * Create a new instance of MainRoutes.
   * @param {express.Application} app - The Express application instance.
   */
  constructor(app) {
    this.app = app;
    this.router = express.Router();
  }

  /**
   * Initialize the routes
   */
  initialize() {
    this.app.use('/', this.router);
    this.router.get('/', (req, res) => {
      res.send('Hello World!');
    });
  }
}

// Export the MainRoutes class as the default export for the module.
export default MainRoutes;
