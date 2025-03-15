import express, { Router, Application } from "express";
import userRouter from "./user.routes";
import notificationsRouter from "./notifications.route";
import { VERSION } from "../config/env";
import errorMiddleware from "../middlewares/error.middleware";

export default function setupRoutes(app: Application) {
  const router = Router();

  router.use("/", express.static("public"));
  router.use("/user", userRouter);
  router.use("/notifications", notificationsRouter);

  app.use(`/api/${VERSION}`, router);
  app.use(errorMiddleware);
}
