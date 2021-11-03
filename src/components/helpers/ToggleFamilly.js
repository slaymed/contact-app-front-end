import React, { useState, useContext } from "react";
import { useMutation } from "@apollo/react-hooks";

// Context
import { ContactContext } from "../../Context/ContactGalleryContext";
import { AlertContext } from "../../Context/SweetAlertContext";

// GraphQL
import { TOGGLE_FAMILLY } from "../../util/GraphQL";

// Icons
import { BsFillPersonPlusFill, BsFillPersonCheckFill } from "react-icons/bs";

// Components
import ActionButton from "./Buttons/ActionButton";
import Tooltip from "./Tooltip";

const ToggleFamilly = () => {
    const [errors, setErrors] = useState({});

    const { hidden, contextContact, setContextContact } =
        useContext(ContactContext);

    const { showAlert } = useContext(AlertContext);

    const [toggleFamilly] = useMutation(TOGGLE_FAMILLY, {
        update: (
            _,
            {
                data: {
                    toggleFamilly: { contact, message },
                },
            }
        ) => {
            setContextContact(contact);
            showAlert(message);
        },
        onError(err) {
            setErrors(err.graphQLErrors[0].extensions.errors);
        },
    });

    const ToggleFamilly = (event) => {
        toggleFamilly({
            variables: { contactID: contextContact.id },
        });
    };
    return (
        <ActionButton onClick={ToggleFamilly}>
            {contextContact.itsFamilly ? (
                <>
                    <BsFillPersonCheckFill style={{ color: "#1DDA39" }} />
                    <Tooltip top={true}>Remove Familly</Tooltip>
                </>
            ) : (
                <>
                    <BsFillPersonPlusFill style={{ color: "inherit" }} />
                    <Tooltip top={true}>Add Familly</Tooltip>
                </>
            )}
        </ActionButton>
    );
};

export default ToggleFamilly;
