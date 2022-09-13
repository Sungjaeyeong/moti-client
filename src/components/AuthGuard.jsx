import React from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "../context/AuthContext";
import * as Routes from "../routes";

const AuthGuard = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Redirect to={Routes.pathConst.login} />;
  }

  return <>{children}</>;
};

AuthGuard.propTypes = {
  children: PropTypes.node,
};

export default AuthGuard;
