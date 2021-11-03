import React, { useContext } from "react";
import { useMutation } from "@apollo/react-hooks";

// GraphQL
import { DELETE_CONTACT, GET_CONTACTS_QUERY } from "../../util/GraphQL";

// Context
import { ContactContext } from "../../Context/ContactGalleryContext";
import { EditContactContext } from "../../Context/EditContactContext";
import { AlertContext } from "../../Context/SweetAlertContext";

// Icons
import { AiOutlineDelete } from "react-icons/ai";

// Components
import ActionButton from "./Buttons/ActionButton";
import Tooltip from "./Tooltip";

export const DeleteContact = () => {
    const { setContextContact, contextContact } = useContext(ContactContext);
    const { closeForm, formOpened } = useContext(EditContactContext);
    const { showAlert } = useContext(AlertContext);

    const [removeContact, { loadind }] = useMutation(DELETE_CONTACT, {
        variables: { contactID: contextContact.id },
        update: (
            proxy,
            {
                data: {
                    deleteContact: { message },
                },
            }
        ) => {
            const data = proxy.readQuery({
                query: GET_CONTACTS_QUERY,
                variables: { contactID: contextContact.id },
            });
            data.getContacts = data.getContacts.filter(
                (contact) => contact.id !== contextContact.id
            );
            proxy.writeQuery({
                query: GET_CONTACTS_QUERY,
                data,
                variables: { contactID: contextContact.id },
            });
            setContextContact(null);
            closeForm();
            showAlert(message);
        },
        onError: (err) => console.log(err.graphQLErrors[0]),
    });
    return (
        !formOpened && (
            <ActionButton onClick={removeContact}>
                <AiOutlineDelete style={{ color: "#DB2763" }} />
                <Tooltip left={true}>Delete Contact</Tooltip>
            </ActionButton>
        )
    );
};
