import { createContext, useReducer } from "react";

// Constans
import { SHOW_ALERT, CLOSE_ALERT } from "./Types";

const initialAlertState = {
    message: null,
    opened: false,
};

export const AlertContext = createContext({
    message: initialAlertState.message,
    opened: initialAlertState.opened,
    showAlert: () => {},
});

const alertReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case SHOW_ALERT:
            return {
                ...state,
                message: payload,
                opened: true,
            };
        case CLOSE_ALERT:
            return { ...initialAlertState };
        default:
            return state;
    }
};

export const AlertProvider = (props) => {
    const [state, dispatch] = useReducer(alertReducer, initialAlertState);

    const showAlert = (message) => {
        dispatch({ type: SHOW_ALERT, payload: message });
        setTimeout(() => {
            dispatch({ type: CLOSE_ALERT });
        }, 1500);
    };

    return (
        <AlertContext.Provider
            value={{
                message: state.message,
                opened: state.opened,
                showAlert,
            }}
            {...props}
        />
    );
};
