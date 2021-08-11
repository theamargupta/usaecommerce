import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const ProtectedRoute = ({ component, ...args }) => {
  return (
    <Route
      component={withAuthenticationRequired(component, {
        onRedirecting:()=> <Redirect to="/"/>,
      })}
      {...args}
    />
  );
};

export default ProtectedRoute;
