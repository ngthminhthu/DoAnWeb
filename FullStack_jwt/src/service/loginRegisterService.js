import db from "../models/index";
import bcrypt from "bcryptjs";
import { Op } from "sequelize";
import poll from "../config/connectPoll";
// BAM MAT KHAU
const salt = bcrypt.genSaltSync(10);
const hashpassword = (password) => {
  // pass word  sau khi chuyển đổi để bảo mật
  var hashpassword = bcrypt.hashSync(password, salt);
  return hashpassword;
};

// CHECK EMAIL TON TAI CHƯA
const checkEmailExist = async (userEmail) => {
  // ** TỒN TẠI
  let [rows, po] = await poll.execute(`select * from user where email = ?`, [
    userEmail,
  ]);
  if (rows[0]) {
    return true;
  }
  return false;
};

// CHECK PHONE TON TAI CHƯA
const checkPhoneExits = async (userPhone) => {
  // ** TỒN TẠI
  // let user = await db.User.findOne({
  //   where: { phone: userPhone },
  // });

  let [rows, po] = await poll.execute(`select * from user where phone = ?`, [
    userPhone,
  ]);
  if (rows[0]) {
    return true;
  }
  return false;
};

// CREATE USER MỚI SAU KHI CHECK THÊM LẦN NỮA
const registerNewUser = async (rawUserData) => {
  try {
    // EMAIL

    let isEmailExits = await checkEmailExist(rawUserData.email);
    if (isEmailExits === true) {
      return {
        EM: " The email is already exits ",
        EC: 1,
      };
    }
    // PHONE
    let isPhoneExits = await checkPhoneExits(rawUserData.phone);

    if (isPhoneExits === true) {
      return {
        EM: " The phone number is already exits ",
        EC: 1,
      };
    }
    // PASSWORD
    if (rawUserData.password && rawUserData.password.length < 5) {
      return {
        EM: " The password length < 5 ",
        EC: 1,
      };
    }
    let hassPassword = hashpassword(rawUserData.password);
    // await db.User.create({
    //   email: rawUserData.email,
    //   username: rawUserData.username,
    //   password: hassPassword,
    //   phone: rawUserData.phone,
    // });
    await poll.execute(
      `INSERT INTO user (email, username,password,phone)
    VALUES (?, ?, ?,?);`,
      [rawUserData.email, rawUserData.username, hassPassword, rawUserData.phone]
    );
    return {
      EM: "A user is created success!  ",
      EC: 0,
    };
  } catch (error) {
    return {
      EM: " Somthing Login  ",
      EC: -2,
    };
  }
};

const checkPassword = (inputpassword, hasspassword) => {
  return bcrypt.compareSync(inputpassword, hasspassword); // true
};
const handleUserLogin = async (rawData) => {
  try {
    // let user = await db.User.findOne({
    //   where: {
    //     [Op.or]: [{ email: rawData.valueLogin }, { phone: rawData.valueLogin }],
    //   },
    // });

    let [rows, po] = await poll.execute(
      `SELECT * FROM user WHERE email = ? OR phone = ?`,
      [rawData.valueLogin, rawData.valueLogin]
    );

    // console.log(">>>> check user voi js ", user.get({ plain: true }));
    if (rows[0]) {
      let isCorrectPassword = checkPassword(rawData.password, rows[0].password);
      if (isCorrectPassword === true) {
        return {
          EM: " OK ",
          EC: 0,
          DT: "",
        };
      }
    }
    return {
      EM: " MAT KHAU HOAC TEN DANG NHAP SAI !",
      EC: 1,
      DT: "",
    };
  } catch (error) {
    return {
      EM: " Somthing Wrongs  ",
      EC: -2,
    };
  }
};
module.exports = {
  registerNewUser,
  checkPassword,
  handleUserLogin,
};
