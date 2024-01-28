import React, { useEffect, useState } from "react";
import "./Nav.scss";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../public/imgs/logo.jpg";
import { useHistory } from "react-router-dom";

export default function Nav() {
  const location = useLocation();
  const [ischeck, setischeck] = useState(true);
  useEffect(() => {
    if (location.pathname === "/login") {
      setischeck(false);
    }
    if (location.pathname === "/register") {
      setischeck(false);
    }
  }, []);
  let history = useHistory();

  const outPage = () => {
    sessionStorage.removeItem("account");
    history.push("/login");
    window.location.reload();
  };
  const outPageRegister = () => {
    sessionStorage.removeItem("account");
    history.push("/register");
    window.location.reload();
  };
  return (
    <>
      {ischeck && (
        <div className="header">
          <div className="header_logo">
            <img src={logo} alt="" />
          </div>
          <div className="header_links">
            <NavLink to="/" className="header__link--home">
              {" "}
              Home
            </NavLink>
            <NavLink to="/users" className="header__link--blog">
              User
            </NavLink>
          </div>
          <button
            class="js-login"
            href=""
            onClick={() => {
              outPage();
            }}
          >
            Login
          </button>
          <button
            class="header_button"
            onClick={() => {
              outPageRegister();
            }}
          >
            Register
          </button>
        </div>
      )}

      {/* <div className="full">
        <div className="thanh"></div>
        <div className="thanh"></div>
      </div> */}
    </>
  );
}
