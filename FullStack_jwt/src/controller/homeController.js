import userService from "../service/userService";
const handleHelloWord = (req, res) => {
  return res.render("home.ejs");
};
// in ra tất cả user màn hình
const handleUser = async (req, res) => {
  let listuser = await userService.getListUsers();
  console.log(" check list users", listuser);
  return res.render("user.ejs", { listuser: listuser });
};
// tạo user
const handleCreateUser = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const username = req.body.username;
  userService.createNewUser(email, password, username);

  return res.redirect("/user");
};
// xóa người dùng
const handleDeleteUser = (req, res) => {
  const id = req.params.id;
  userService.deleteUser(id);
  return res.redirect("/user");
};

// **** phần update  //
// phần hander của update
const handleUpdate = async (req, res) => {
  let id = req.params.id;
  let listuser = await userService.getListUserUpdate(id);

  return res.render("userupdate.ejs", { listuser: listuser });
};
// sử lý khi ấn update
const UpdateUser = (req, res) => {
  let { email, username, id } = req.body;
  userService.updateUser(email, username, id);
  return res.redirect("/user");
};
module.exports = {
  handleHelloWord,
  handleUser,
  handleCreateUser,
  handleDeleteUser,
  handleUpdate,
  UpdateUser,
};
