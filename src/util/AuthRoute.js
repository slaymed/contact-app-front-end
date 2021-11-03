import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

// Context
import { AuthContext } from "../Context/UserContext";

const AuthRoute = ({ component: Component, authenticated, guest, ...rest }) => {
    const { user } = useContext(AuthContext);

    if (authenticated && !user) {
        return <Redirect to="/login" />;
    } else if (guest && user) {
        return <Redirect to="/" />;
    } else {
        return <Route component={Component} {...rest} />;
    }
};

export default AuthRoute;
