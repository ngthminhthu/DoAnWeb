import React, { useEffect, useState } from "react";
import "./Login.scss";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../../services/userService";
export default function Login() {
  let history = useHistory();
  const [valueLogin, setvalueLogin] = useState("");
  const [password, setPassword] = useState("");
  let isvalueInput = {
    isvalueLogin: true,
    ispassword: true,
  };
  const [objValidInput, setobjValidInput] = useState(isvalueInput);

  const handerregister = () => {
    history.push("/register");
    window.location.reload();
  };
  // Click btn login
  const handleLogin = async () => {
    setobjValidInput(isvalueInput);
    if (!valueLogin) {
      setobjValidInput({ ...isvalueInput, isvalueLogin: false });
      toast.error("please enter email or phone");
      return;
    }
    if (!password) {
      setobjValidInput({ ...isvalueInput, ispassword: false });
      toast.error("please enter password");
      return;
    }
    let data = await loginUser(valueLogin, password);
    if (data && data.data && +data.data.EC === 0) {
      let data = {
        isAuthenicated: true,
        token: "fake token",
      };
      sessionStorage.setItem("account", JSON.stringify(data));
      toast.success("Login success! ");
      history.push("/users");
      window.location.reload();
    } else {
      toast.error("Login false! ");
    }
  };
  const handKeyCode = (event) => {
    if (event.charCode === 13 && event.code === "Enter") {
      handleLogin();
    }
  };

  useEffect(() => {
    let session = sessionStorage.getItem("account");
    if (session) {
      history.push("/");
      window.location.reload();
    }
  }, []);
  return (
    <div className="login-container  ">
      <div className="container">
        <div className="row">
          <div className="content-left  col-sm-7  d-sm-block ">
            <div className="brand ">Minh Thư</div>
            <div className="detail  d-none d-sm-block">Minh Thư hihihihihi</div>
          </div>
          <div className="content-right col-12 col-sm-5 d-flex flex-column gap-3 py-3">
            <input
              type="email"
              className={
                objValidInput.isvalueLogin
                  ? "form-control"
                  : "form-control is-invalid"
              }
              placeholder="Email"
              value={valueLogin}
              onChange={(e) => setvalueLogin(e.target.value)}
            />
            <input
              type="password"
              className={
                objValidInput.ispassword
                  ? "form-control"
                  : "form-control is-invalid"
              }
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(event) => {
                handKeyCode(event);
              }}
            />
            <button
              className="btn btn-primary"
              onClick={() => {
                handleLogin();
              }}
            >
              Login
            </button>
            <span className="text-center">
              <a
                className="right-a"
                href="https://www.facebook.com/profile.php?id=100015480104825"
              >
                Forgot your password?{" "}
              </a>
            </span>
            <div className="text-center">
              <button
                className="btn btn-success"
                onClick={() => {
                  handerregister();
                }}
              >
                Create new account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
