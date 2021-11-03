import React, { useContext } from "react";
import { useMutation } from "@apollo/react-hooks";

// GraphQL
import { DELETE_HOME_FROM_CONTACT } from "../../util/GraphQL";

// Context
import { ContactContext } from "../../Context/ContactGalleryContext";
import { AlertContext } from "../../Context/SweetAlertContext";

// Components
import NumberButton from "./Buttons/NumberButton";
import Tooltip from "./Tooltip";

// Icons
import { TiDeleteOutline } from "react-icons/ti";

const DeleteHome = ({ home }) => {
    const { contextContact, setContextContact } = useContext(ContactContext);
    const { showAlert } = useContext(AlertContext);

    const [deleteHomeFromContact] = useMutation(DELETE_HOME_FROM_CONTACT, {
        update: (
            _,
            {
                data: {
                    deleteHomeFromContact: { contact, message },
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
                deleteHomeFromContact({
                    variables: {
                        contactID: contextContact.id,
                        home,
                    },
                })
            }
        >
            <TiDeleteOutline style={{ color: "#E74C3C" }} />
            <Tooltip left={true}>Delete</Tooltip>
        </NumberButton>
    );
};

export default DeleteHome;
