import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { Routes } from '../internal/adapters/routes/index.js';

/**
 * Represents an Express application server.
 */
class Server {
  /**
   * Creates an instance of the Server class.
   */
  constructor() {
    this.app = express();
    this.setMiddlewares();
    this.setRoutes();
  }

  /**
   * Sets up the middlewares for the Express server.
   */
  setMiddlewares() {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  /**
   * Sets up the routes for the Express server.
   */
  setRoutes() {
    const mainRoutes = new Routes.MainRoutes(this.app);
    mainRoutes.initialize();
  }

  /**
   * Return express app
   * @returns {Express}
   */
  getServer() {
    return this.app;
  }
}

export default Server;
