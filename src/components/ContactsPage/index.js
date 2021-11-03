import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/react-hooks";

// Components
import Contact from "./Contact";

// Context
import { ContactContext } from "../../Context/ContactGalleryContext";
import { FilterContext } from "../../Context/FilterContext";

// GraphQL
import { GET_CONTACTS_QUERY } from "../../util/GraphQL";

// Components
import ContactGallery from "../ContactGallery";
import CreateContactButtonSM from "./Contact/CreateContactButtonSM";

const ContactsPage = () => {
    // Contexts
    const { contextContact, setContextContact, hidden } =
        useContext(ContactContext);

    const { famillyFilter, favoriteFilter, searchFilter, searchValue } =
        useContext(FilterContext);

    const [contacts, setContacts] = useState([]);

    const { loading, data } = useQuery(GET_CONTACTS_QUERY);

    useEffect(() => {
        if (data && data.getContacts) {
            if (searchFilter && !favoriteFilter && !famillyFilter) {
                if (searchValue) {
                    const contacts = data.getContacts.filter(
                        ({ firstName, lastName, numbers, homeNumbers }) => {
                            const justMobileNumbers = [];
                            const justHomeNumbers = [];

                            numbers.forEach(({ mobile }) =>
                                justMobileNumbers.unshift(mobile)
                            );
                            homeNumbers.forEach(({ home }) =>
                                justHomeNumbers.unshift(home)
                            );

                            return `${firstName} ${lastName} ${justMobileNumbers.toString()} ${justHomeNumbers.toString()}`
                                .toLowerCase()
                                .includes(searchValue.toLowerCase());
                        }
                    );
                    setContacts(contacts);
                } else {
                    setContacts(data.getContacts);
                }
            }

            if (favoriteFilter && !famillyFilter && !searchFilter) {
                const contacts = data.getContacts.filter(
                    ({ itsFavorite }) => itsFavorite
                );
                setContacts(contacts);
            }
            if (famillyFilter && !favoriteFilter && !searchFilter) {
                const contacts = data.getContacts.filter(
                    ({ itsFamilly }) => itsFamilly
                );
                setContacts(contacts);
            }
            if (!favoriteFilter && !famillyFilter && !searchFilter) {
                setContacts(data.getContacts);
            }
        }
    }, [data, favoriteFilter, famillyFilter, searchFilter, searchValue]);

    useEffect(() => {
        if (contacts && contextContact) {
            const [selectedContact] = contacts.filter(
                (contact) => contact.id === contextContact.id
            );
            if (!selectedContact) {
                setContextContact(null);
            }
        }
    }, [contacts, contextContact, setContextContact]);

    return (
        <div className="relative col-span-12 row-span-6 overflow-x-hidden bg-gray-100 rounded shadow dark:bg-gray-800 sm:col-span-6 lg:col-span-5 xl:col-span-6 2xl:col-span-7">
            <div className="overflow-y-auto rounded cont scroll-bar">
                <div
                    className={`absolute inset-0 w-full h-full duration-200 bg-gray-800 transform sm:hidden ${
                        !contextContact
                            ? "translate-x-full"
                            : hidden
                            ? "translate-x-full"
                            : "translate-x-0"
                    }`}
                >
                    {contextContact && <ContactGallery />}
                </div>

                {!contacts.length > 0 && loading && (
                    <ul className="flex items-center justify-center h-full">
                        <li>
                            <p className="text-2xl font-medium">Loading...</p>
                        </li>
                    </ul>
                )}
                {contacts.length > 0 && !loading && (
                    <ul className="grid grid-cols-1 gap-3 p-3 xl:grid-cols-2 2xl:grid-cols-3">
                        {contacts &&
                            !loading &&
                            contacts.map((contact) => (
                                <Contact key={contact.id} contact={contact} />
                            ))}
                    </ul>
                )}

                {!contacts.length > 0 && !loading && (
                    <ul className="flex items-center justify-center h-full">
                        <li>
                            <p className="text-2xl font-medium">
                                {favoriteFilter &&
                                    !famillyFilter &&
                                    "No favorite contacts"}
                                {!favoriteFilter &&
                                    famillyFilter &&
                                    "No familly contacts"}
                                {!favoriteFilter &&
                                    !famillyFilter &&
                                    "No contacts"}
                            </p>
                        </li>
                    </ul>
                )}

                <CreateContactButtonSM />
            </div>
        </div>
    );
};

export default ContactsPage;
