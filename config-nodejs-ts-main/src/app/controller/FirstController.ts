import { Request, Response } from "express";
/**
 * @class FirstController
 */
class FirstController {
  /**
   * @param {Request} req
   * @param {Response} res
   * @return {*} 
   * @memberof FirstController
   */
  public home(req: Request, res: Response) {
    return res.json({
      response: "Hello World",
    });
  }
}




export const firstController = new FirstController();
