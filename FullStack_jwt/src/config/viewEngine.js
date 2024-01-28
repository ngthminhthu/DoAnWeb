import express from "express";

//
const configViewEngine = (app) => {
  app.use(express.static("./src/public"));

  // định nghĩa các view hiển thị sẽ có đuôi ejs ( trình bày công nghệ mà mình sài cho expess hiểu )
  app.set("view engine", "ejs");
  // và các đuôi ejs sẽ vào trong src views để tìm
  app.set("views", "./src/views");
};

export default configViewEngine;
