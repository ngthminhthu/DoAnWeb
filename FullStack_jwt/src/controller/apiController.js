import logiRegisterService from "../service/loginRegisterService";
const getApi = (req, res) => {
  return res.status(200).json({
    message: "success",
    api: "vai lon that",
  });
};

// *** XU LY REGISTER
const handerRegister = async (req, res) => {
  try {
    if (!req.body.email || !req.body.phone || !req.body.password) {
      return res.status(200).json({
        EM: "Success", // error message
        EC: "1", // error code
        DT: "", //data
      });
    }

    // ket noi data : create user
    let data = await logiRegisterService.registerNewUser(req.body);

    return res.status(200).json({
      EM: data.EM, // error message
      EC: data.EC, // error code
      DT: "", //data
    });
  } catch (error) {
    return res.status(500).json({
      EM: "error", // error message
      EC: "-1", // error code
      DT: "", //data
    });
  }
};

// *** XU LY LOGIN
const handleLogin = async (req, res) => {
  try {
    let data = await logiRegisterService.handleUserLogin(req.body);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "error", // error message
      EC: "-1", // error code
      DT: "", //data
    });
  }
};

module.exports = {
  getApi,
  handerRegister,
  handleLogin,
};
