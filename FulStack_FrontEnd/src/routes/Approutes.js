import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../components/Login/Login";
import Users from "../components/Managesers/Users";
import Register from "../components/Register/Register";
import PrivateRoutes from "./PrivateRoutes";

export default function Approutes() {
  const project = () => {
    return (
      <>
        <span>project page</span>
      </>
    );
  };
  return (
    <div>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoutes path="/users" component={Users} />
        <PrivateRoutes path="/project" component={project} />
        <Route path="/register">
          <Register />{" "}
        </Route>

        <Route path="/" exact>
          <h3
            style={{
              color: "red",
              display: "flex",
              justifyContent: "center",
              marginTop: "150px",
            }}
          >
            Please log in !{" "}
          </h3>
        </Route>

        <Route path="*"> NOT FOUND </Route>
      </Switch>
    </div>
  );
}
