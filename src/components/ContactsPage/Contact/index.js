import React, { useContext, useState } from "react";
import { FaPhoneSquareAlt, FaUserCircle } from "react-icons/fa";

import { ContactContext } from "../../../Context/ContactGalleryContext";
import { EditContactContext } from "../../../Context/EditContactContext";

const Contact = ({ contact }) => {
    const {
        contextContact,
        setContextContact,
        head_ShowContextContact,
    } = useContext(ContactContext);

    const { closeForm } = useContext(EditContactContext);

    const showContactInfo = () => {
        if (contextContact) {
            if (contact.id !== contextContact.id) {
                setContextContact(contact);
            } else {
                head_ShowContextContact();
            }
        } else {
            setContextContact(contact);
        }
        closeForm();
    };

    return (
        <li
            className="duration-200 bg-gray-200 rounded shadow cursor-pointer hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
            onClick={showContactInfo}
        >
            <div className="flex items-center justify-center h-48">
                {contact.firstName ? (
                    <FaUserCircle
                        style={{ color: "inherit" }}
                        className="mr-3"
                    />
                ) : contact.lastName ? (
                    <FaUserCircle
                        style={{ color: "inherit" }}
                        className="mr-3"
                    />
                ) : (
                    ""
                )}

                {contact.firstName && (
                    <h2 className="mr-1 text-2xl font-bold ">
                        {contact.firstName}
                    </h2>
                )}
                {contact.lastName && (
                    <h2 className="text-2xl font-bold ">{contact.lastName}</h2>
                )}

                {!contact.firstName &&
                    !contact.lastName &&
                    contact.numbers.map(
                        (number) =>
                            number.isDefault && (
                                <>
                                    <FaPhoneSquareAlt
                                        style={{ color: "inherit" }}
                                        className="mr-3"
                                    />
                                    <h2 className="text-2xl font-bold ">
                                        {number.mobile}
                                    </h2>
                                </>
                            )
                    )}
            </div>
        </li>
    );
};

export default Contact;
