import express from "express";

import apiController from "../controller/apiController";
const router = express.Router();

const initApiRouter = (app) => {
  router.get("/test-api", apiController.getApi);
  router.post("/register", apiController.handerRegister);
  router.post("/login", apiController.handleLogin);

  return app.use("/api/v1", router);
};
export default initApiRouter;
