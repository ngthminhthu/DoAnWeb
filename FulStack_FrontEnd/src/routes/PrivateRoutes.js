import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function PrivateRoutes(props) {
  let history = useHistory();
  useEffect(() => {
    let token = sessionStorage.getItem("account");
    if (!token) {
      history.push("/login");
      window.location.reload();
    }
  }, []);
  return (
    <div>
      <Route path={props.path} component={props.component} />
    </div>
  );
}
