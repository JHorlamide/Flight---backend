/* Libraries */
import { Request, Response } from "express";

/* Application Modules */
import asyncHandler from "../../common/middleware/asynchandler.middleware";

class SlideManagerController {
  public getAllSlides = asyncHandler(async (req: Request, res: Response) => {
    
  });
}

export default new SlideManagerController();
