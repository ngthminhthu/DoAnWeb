import express from "express";
import homeController from "../controller/homeController";
import apiController from "../controller/apiController";
const router = express.Router();

const initWebRouter = (app) => {
  router.get("/", homeController.handleHelloWord);
  router.get("/user", homeController.handleUser);

  router.post("/users/create-user", homeController.handleCreateUser);
  router.post("/users/delete-user/:id", homeController.handleDeleteUser);
  // update user
  router.get("/user/update/:id", homeController.handleUpdate);
  router.post("/users/update", homeController.UpdateUser);

  router.get("/user/api1", apiController.getApi);

  return app.use("/", router);
};
export default initWebRouter;
