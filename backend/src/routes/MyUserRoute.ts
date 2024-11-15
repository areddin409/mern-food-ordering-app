// MyUserRoute.ts
import express, { NextFunction, Request, Response } from "express";
import MyUserController from "../controllers/MyUserController";
import { jwtCheck } from "../middleware/auth";

const router = express.Router();

router.post(
  "/",
  jwtCheck,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await MyUserController.createCurrentUser(req, res);
    } catch (error) {
      next(error);
    }
  },
);

export default router;
