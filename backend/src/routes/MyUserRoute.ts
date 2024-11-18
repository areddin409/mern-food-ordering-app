import express, { NextFunction, Request, Response } from "express";
import MyUserController from "../controllers/MyUserController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyUserRequest } from "../middleware/validation";

const router = express.Router();

router.post(
  "/",
  jwtCheck,
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await MyUserController.createCurrentUser(req, res);
    } catch (error) {
      next(error);
    }
  },
);

router.put(
  "/",
  jwtCheck,
  jwtParse,
  ...validateMyUserRequest,
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await MyUserController.updateCurrentUser(req, res);
    } catch (error) {
      next(error);
    }
  },
);

export default router;
