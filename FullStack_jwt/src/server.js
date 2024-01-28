import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRouter from "./routes/web";
import initApiRouter from "./routes/api";

import connection from "./config/connectDB";

import cors from "./config/cors";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8888;
// liên kết 2 Fe và Be
cors(app);

// npm thu vien de su dung req.body
import bodyParser from "body-parser";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

configViewEngine(app);
// check xem keets noois dduocwj orrm chuaw
// connection();
initWebRouter(app);
initApiRouter(app);
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
