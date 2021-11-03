import React, { useContext } from "react";
import { useMutation } from "@apollo/react-hooks";

// GraphQL
import { DELETE_MOBILE_FROM_CONTACT } from "../../util/GraphQL";

// Context
import { ContactContext } from "../../Context/ContactGalleryContext";
import { AlertContext } from "../../Context/SweetAlertContext";

// Icons
import { TiDeleteOutline } from "react-icons/ti";

// Components
import NumberButton from "./Buttons/NumberButton";
import Tooltip from "./Tooltip";

const DeleteMobile = ({ mobile }) => {
    const { contextContact, setContextContact } = useContext(ContactContext);
    const { showAlert } = useContext(AlertContext);

    const [deleteMobileFromContact] = useMutation(DELETE_MOBILE_FROM_CONTACT, {
        update: (
            _,
            {
                data: {
                    deleteMobileFromContact: { contact, message },
                },
            }
        ) => {
            setContextContact(contact);
            showAlert(message);
        },
        onError(err) {
            console.log(err.graphQLErrors[0].message);
        },
    });

    return (
        <NumberButton
            onClick={() =>
                deleteMobileFromContact({
                    variables: {
                        contactID: contextContact.id,
                        mobile,
                    },
                })
            }
        >
            <TiDeleteOutline style={{ color: "#E74C3C" }} />
            <Tooltip left={true}>Delete</Tooltip>
        </NumberButton>
    );
};

export default DeleteMobile;
