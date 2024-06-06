/* Libraries */
import { Application } from "express";

/* Application Modules */
import config from "../config/app.config";
import slideController from "./controller/slide.manager.controller";
import { CommonRoutesConfig } from "../common/common.route.config";

const APP_PREFIX_PATH = config.prefix;

export class SlideManagerRoute extends CommonRoutesConfig {
  constructor(app: Application) {
    super(app, "users");
  }

  configureRoutes(): Application {
    /***
    * @route  GET: /api/slides/:presentationId
    * @description   Get all slides.
    * @access Private.
    * @param {string} presentationId
    * ***/
    this.app.get(`${APP_PREFIX_PATH}/slides/:presentationId`, [
      slideController.getAllSlides
    ])

    return this.app;
  }
}