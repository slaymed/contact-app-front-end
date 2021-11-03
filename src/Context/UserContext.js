import React, { useReducer, createContext } from "react";
import jwtDecode from "jwt-decode";

// Constans
import { LOGIN, LOGOUT } from "./Types";

const initialState = {
    user: null,
};

const token = localStorage.getItem("JWTTOKEN");

if (token) {
    const decodedToken = jwtDecode(token);

    if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem("JWTTOKEN");
    } else {
        initialState.user = decodedToken;
    }
}

export const AuthContext = createContext({
    user: initialState.user,

    login: (userData) => {},
    logout: () => {},
});

const authReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case LOGIN:
            return {
                ...state,
                user: payload,
            };
        case LOGOUT:
            window.location.href = "/login";
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
};

export const AuthProvider = (props) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    const login = (userData) => {
        localStorage.setItem("JWTTOKEN", userData.token);
        const decodedToken = jwtDecode(userData.token);
        dispatch({ type: LOGIN, payload: decodedToken });

        const registedUsers =
            JSON.parse(localStorage.getItem("REGISTED__USER")) || [];

        if (!registedUsers.includes(decodedToken.slayerID)) {
            registedUsers.unshift(decodedToken.slayerID);
        }

        localStorage.setItem("REGISTED__USER", JSON.stringify(registedUsers));
    };

    const logout = () => {
        localStorage.removeItem("JWTTOKEN");
        dispatch({ type: LOGOUT });
    };

    return (
        <AuthContext.Provider
            value={{ user: state.user, login, logout }}
            {...props}
        />
    );
};
