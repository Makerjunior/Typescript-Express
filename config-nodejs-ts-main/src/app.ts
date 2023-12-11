import express from "express";
import { router } from "./router";

/**
 * The App class represents the Express application.
 * @class
 */
export class App {
  /**
   * The server instance of the Express application.
   * @type {express.Application}
   */
  public server: express.Application = express();
  constructor() {
    this.server = express();
    this.middleware();
    this.router();
  }

  /**
   * Adds middleware to the Express application.
   * @private
   * @return {void}
   */
  private middleware(): void {
    this.server.use(express.json());
  }

  /**
   * Adds router to the Express application.
   * @private
   * @return {void}
   */
  private router(): void {
    this.server.use(router);
  }
}
