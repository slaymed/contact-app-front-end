import React, { useState, useContext } from "react";

import { useMutation } from "@apollo/react-hooks";

// Context
import { ContactContext } from "../../Context/ContactGalleryContext";
import { AlertContext } from "../../Context/SweetAlertContext";

// GraphQL
import { TOGGLE_FAVORITE } from "../../util/GraphQL";

// Icons
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

// Components
import ActionButton from "./Buttons/ActionButton";
import Tooltip from "./Tooltip";

const ToggleFavorite = () => {
    const [errors, setErrors] = useState({});

    const { hidden, contextContact, setContextContact } =
        useContext(ContactContext);

    const { showAlert } = useContext(AlertContext);

    const [toggleFavorite] = useMutation(TOGGLE_FAVORITE, {
        update: (
            _,
            {
                data: {
                    toggleFavorite: { contact, message },
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

    const ToggleFavorite = () => {
        toggleFavorite({
            variables: { contactID: contextContact.id },
        });
    };
    return (
        <ActionButton onClick={ToggleFavorite}>
            {contextContact.itsFavorite ? (
                <>
                    <AiFillStar style={{ color: "#D6BE2A" }} />
                    <Tooltip top={true}>Remove Favorite</Tooltip>
                </>
            ) : (
                <>
                    <AiOutlineStar style={{ color: "inherit" }} />
                    <Tooltip top={true}>Add Favorite</Tooltip>
                </>
            )}
        </ActionButton>
    );
};

export default ToggleFavorite;
