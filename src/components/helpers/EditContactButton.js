import React, { useContext } from "react";

// Context
import { ContactContext } from "../../Context/ContactGalleryContext";
import { EditContactContext } from "../../Context/EditContactContext";

// Icons
import { FaUserEdit } from "react-icons/fa";
import { BsXCircle } from "react-icons/bs";

// Components
import ActionButton from "./Buttons/ActionButton";
import Tooltip from "./Tooltip";

export const EditContactButton = () => {
    const { contextContact } = useContext(ContactContext);

    const { formOpened, setFormValues, closeForm, contactID } =
        useContext(EditContactContext);

    const inputs = {
        ...contextContact.location,
        ...contextContact.birthday,
        firstName: contextContact.firstName,
        middleName: contextContact.middleName,
        lastName: contextContact.lastName,
        nickName: contextContact.nickName,
        company: contextContact.company,
        email: contextContact.email,
        website: contextContact.website,
        relationShip: contextContact.relationShip,
    };

    const toggleForm = () => {
        formOpened
            ? contextContact.id !== contactID
                ? setFormValues({
                      contactID: contextContact.id,
                      formValues: inputs,
                  })
                : closeForm()
            : setFormValues({
                  contactID: contextContact.id,
                  formValues: inputs,
              });
    };

    return formOpened ? (
        contextContact.id !== contactID ? (
            <ActionButton onClick={toggleForm}>
                <FaUserEdit style={{ color: "inherit" }} />
                <Tooltip right={true}>Edit Contact</Tooltip>
            </ActionButton>
        ) : (
            <ActionButton onClick={closeForm}>
                <BsXCircle style={{ color: "#F10816" }} />
                <Tooltip right={true}>Close</Tooltip>
            </ActionButton>
        )
    ) : (
        <ActionButton onClick={toggleForm}>
            <FaUserEdit style={{ color: "inherit" }} />
            <Tooltip right={true}>Edit Contact</Tooltip>
        </ActionButton>
    );
};
