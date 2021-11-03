import { createContext, useReducer } from "react";

// Constans
import { SET_VALUES, CLOSE_FORM } from "./Types";

const initialFormState = {
    formOpened: false,
    formValues: null,
    contactID: null,
};

export const EditContactContext = createContext({
    formValues: initialFormState.formValues,
    formOpened: false,
    contactID: null,
    setFormValues: () => {},
    closeForm: () => {},
});

const editContactReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_VALUES:
            return {
                ...state,
                formValues: payload.formValues,
                contactID: payload.contactID,
                formOpened: true,
            };
        case CLOSE_FORM:
            return {
                ...initialFormState,
            };
        default:
            return state;
    }
};

export const EditContactProvider = (props) => {
    const [state, dispatch] = useReducer(editContactReducer, initialFormState);

    const setFormValues = (payload) => {
        dispatch({ type: SET_VALUES, payload });
    };

    const closeForm = () => {
        dispatch({ type: CLOSE_FORM });
    };
    return (
        <EditContactContext.Provider
            value={{
                formValues: state.formValues,
                setFormValues,
                closeForm,
                contactID: state.contactID,
                formOpened: state.formOpened,
            }}
            {...props}
        />
    );
};
