// MyUserRoute.ts
import express, { NextFunction, Request, Response } from "express";
import MyUserController from "../controllers/MyUserController";

const router = express.Router();

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    await MyUserController.createCurrentUser(req, res);
  } catch (error) {
    next(error);
  }
});

export default router;
