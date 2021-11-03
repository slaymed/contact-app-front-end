import { createContext, useReducer } from "react";

// Constans
import { HEAD_SHOW_CONTACT, SET_CONTACT } from "./Types";

const initialContactState = {
    contextContact: null,
    hidden: true,
};

export const ContactContext = createContext({
    contextContact: initialContactState.contextContact,
    hidden: initialContactState.hidden,
    setContextContact: () => {},
    head_ShowContextContact: () => {},
});

const contactReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_CONTACT:
            return {
                ...state,
                contextContact: payload,
                hidden: false,
            };
        case HEAD_SHOW_CONTACT:
            return {
                ...state,
                hidden: !state.hidden,
            };
        default:
            return state;
    }
};

export const ContactProvider = (props) => {
    const [state, dispatch] = useReducer(contactReducer, initialContactState);

    const setContextContact = (contact) => {
        dispatch({ type: SET_CONTACT, payload: contact });
    };

    const head_ShowContextContact = () => {
        dispatch({ type: HEAD_SHOW_CONTACT });
    };
    return (
        <ContactContext.Provider
            value={{
                contextContact: state.contextContact,
                setContextContact,
                head_ShowContextContact,
                hidden: state.hidden,
            }}
            {...props}
        />
    );
};
