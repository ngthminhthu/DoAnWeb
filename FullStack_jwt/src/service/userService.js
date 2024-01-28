import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";
import db from "../models/index";
import poll from "../config/connectPoll";

// get the promise implementation, we will use bluebird
import bluebird from "bluebird";

// create the connection, specify bluebird as Promise

// select user
const getListUsers = async () => {
  let user = await db.User.findOne({
    where: { id: 1 },
    attributes: ["id", "username", "email"],
    include: { model: db.Group, attributes: ["name", "description"] },

    raw: true,
    nest: true,
  });
  let role = await db.Role.findAll({
    // attributes: ["id", "username", "email"],
    include: { model: db.Group, where: { id: 1 } },

    raw: true,
    nest: true,
  });
  // console.log(">>>> check new users", user);
  // console.log(">>>> check role", role);

  // let users = [];
  // users = await db.User.findAll();

  // return users;

  let [results] = await poll.query("  select * from user ");
  console.log("check phone ", results[0]);
  return results;
};

// băm mật khẩu
const salt = bcrypt.genSaltSync(10);
const hashpassword = (password) => {
  // pass word  sau khi chuyển đổi để bảo mật
  var hashpassword = bcrypt.hashSync(password, salt);
  return hashpassword;
};

// create user
const createNewUser = async (email, password, username) => {
  let haPass = hashpassword(password);

  let [results, fields] = await poll.query(
    `INSERT INTO user (email, password,username)
  VALUES (?, ?, ?);`,
    [email, haPass, username]
  );
};

// xóa user
const deleteUser = async (userId) => {
  // jane is now in the database
  await db.User.destroy({
    where: { id: userId },
  });
};

// select user để update
const getListUserUpdate = async (id) => {
  const [rows, po] = await poll.execute(`  SELECT * FROM user where id= ?`, [
    id,
  ]);
  return rows[0];
};

// update user
const updateUser = async (email, username, id) => {
  await poll.execute(
    `UPDATE user
  SET  email = ?, username= ?  
  WHERE id = ?`,
    [email, username, id]
  );
};

module.exports = {
  createNewUser,
  getListUsers,
  deleteUser,
  getListUserUpdate,
  updateUser,
};
