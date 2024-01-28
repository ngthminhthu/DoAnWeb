import React, { useEffect, useState } from "react";
import "./Register.scss";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { registerNewUser } from "../../services/userService";

export default function Register() {
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  let defaulttValidInput = {
    isValidEmail: true,
    isValidPhone: true,
    isValidPasword: true,
    isValidConFirmPassword: true,
  };
  const [objectCheckInput, setobjectCheckInput] = useState(defaulttValidInput);

  let history = useHistory();
  const handerLogin = () => {
    history.push("/login");
    window.location.reload();
  };
  useEffect(() => {
    axios.get("http://localhost:8888/api/v1/test-api").then((data) => {});
  }, []);

  // HÀM CHECK THONG TIN NHAP VAO
  const isValidInputs = () => {
    if (!email) {
      toast.error("Please enter the correct email format");
      setobjectCheckInput({ ...defaulttValidInput, isValidEmail: false });
      return false;
    }
    var check = /\S+@\S+\.\S+/;
    if (!check.test(email)) {
      toast.error("Please enter the format @gmail.com");
      setobjectCheckInput({ ...defaulttValidInput, isValidEmail: false });
      return false;
    }
    if (!phone) {
      toast.error("Please enter the correct phone format");
      setobjectCheckInput({ ...defaulttValidInput, isValidPhone: false });
      return false;
    }
    if (!password) {
      toast.error("Please enter the correct password format");
      setobjectCheckInput({ ...defaulttValidInput, isValidPasword: false });
      return false;
    }
    if (password !== confirmPassword) {
      setobjectCheckInput({
        ...defaulttValidInput,
        isValidConFirmPassword: false,
      });
      toast.error("Please enter the correct password");
      return false;
    }
    return true;
  };

  const handerRegister = async () => {
    let checkinput = isValidInputs();
    if (checkinput === true) {
      // GỌI SEVER ĐỂ TẠO NGƯỜI DÙNG
      let data = await registerNewUser(email, phone, username, password);
      if (+data.data.EC === 0) {
        history.push("/login");
        toast.success(data.data.EM);
      } else {
        toast.error(data.data.EM);
      }
    }
  };
  return (
    <div className="register-container  ">
      <div className="container ">
        <div className="row">
          <div className="content-left  col-sm-7  d-sm-block   ">
            <div className="brand mt-30 ">Minh Thư</div>
            <div className="detail  d-none d-sm-block">Minh Thư hihihihihi</div>
          </div>
          <div className="content-right col-12 col-sm-5 d-flex flex-column gap-3 py-3">
            <div className="form-group">
              <label> Email:</label>
              <input
                type="email"
                className={
                  objectCheckInput.isValidEmail
                    ? "form-control"
                    : "form-control is-invalid"
                }
                placeholder="Email user"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label> Phone:</label>
              <input
                type="text"
                className={
                  objectCheckInput.isValidPhone
                    ? "form-control"
                    : "form-control is-invalid"
                }
                placeholder="Phone user"
                value={phone}
                onChange={(e) => setphone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label> User name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="User name "
                value={username}
                onChange={(e) => setusername(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label> Password:</label>
              <input
                type="password"
                className={
                  objectCheckInput.isValidPasword
                    ? "form-control"
                    : "form-control is-invalid"
                }
                placeholder="Password user"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label> Re-enter password:</label>
              <input
                type="password"
                className={
                  objectCheckInput.isValidConFirmPassword
                    ? "form-control"
                    : "form-control is-invalid"
                }
                placeholder="Password user"
                value={confirmPassword}
                onChange={(e) => setconfirmPassword(e.target.value)}
              />
            </div>
            <button
              className="btn btn-primary"
              onClick={() => {
                handerRegister();
              }}
            >
              Register
            </button>

            <div className="text-center">
              <button
                className="btn btn-success"
                onClick={() => {
                  handerLogin();
                }}
              >
                Already've an account .Login{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
