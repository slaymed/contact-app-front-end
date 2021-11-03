import { useMutation } from "@apollo/react-hooks";
import React, { useContext, useEffect, useState } from "react";

// Context
import { EditContactContext } from "../../../../Context/EditContactContext";
import { ContactContext } from "../../../../Context/ContactGalleryContext";
import { AlertContext } from "../../../../Context/SweetAlertContext";

// GraphQL
import { EDIT_CONTACT_INFO } from "../../../../util/GraphQL";

// Icons
import { RiArrowDownSLine } from "react-icons/ri";

// Conponents
import ActionButton from "../../../helpers/Buttons/ActionButton";

const EditContact = () => {
    const { formValues, contactID } = useContext(EditContactContext);
    const { setContextContact } = useContext(ContactContext);
    const { closeForm } = useContext(EditContactContext);
    const { showAlert } = useContext(AlertContext);

    const [inputs, setInputs] = useState(formValues);
    const [all, setAll] = useState(false);

    useEffect(() => {
        if (formValues) {
            setInputs(formValues);
        }
    }, [formValues]);

    const handleInputsChange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
    };

    const [editContactInfo] = useMutation(EDIT_CONTACT_INFO, {
        update: (
            _,
            {
                data: {
                    editContactInfo: { contact, message },
                },
            }
        ) => {
            setContextContact(contact);
            closeForm();
            showAlert(message);
        },
        onError(err) {
            console.log(err.graphQLErrors[0]);
        },
    });

    const submitContactChange = (event) => {
        event.preventDefault();
        editContactInfo({
            variables: {
                contactID,
                ...inputs,
            },
        });
    };
    return (
        <div>
            <div className="fixed z-20 flex flex-col w-3/4 gap-3 p-4 transform -translate-x-1/2 -translate-y-1/2 rounded sm:w-auto top-1/2 left-1/2 dark:bg-gray-800">
                <form className="flex flex-col gap-2 contact-form">
                    <div className="flex justify-between">
                        <p>Edit Contact</p>
                        <div
                            className="flex items-center justify-center duration-100 bg-gray-600 rounded cursor-pointer opacity-80 hover:opacity-100 hover:bg-gray-500"
                            onClick={() => setAll(!all)}
                        >
                            <RiArrowDownSLine
                                className={`duration-200 ${
                                    all && "transform  rotate-180"
                                }`}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col flex-auto gap-2 overflow-auto scroll-bar">
                        <div className="flex flex-col gap-2 sm:flex-row ">
                            <div className="flex flex-col gap-2 p-2 bg-gray-700 rounded">
                                <div>
                                    <p className="text-sm">Full Name</p>
                                </div>

                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="px-2 py-1 text-xs text-gray-100 bg-transparent border-2 border-solid rounded-sm dark:border-gray-600"
                                    value={inputs.firstName}
                                    name="firstName"
                                    onChange={handleInputsChange}
                                />
                                <input
                                    type="text"
                                    placeholder="Middle Name"
                                    className="px-2 py-1 text-xs text-gray-100 bg-transparent border-2 border-solid rounded-sm dark:border-gray-600"
                                    value={inputs.middleName}
                                    name="middleName"
                                    onChange={handleInputsChange}
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="px-2 py-1 text-xs text-gray-100 bg-transparent border-2 border-solid rounded-sm dark:border-gray-600"
                                    value={inputs.lastName}
                                    name="lastName"
                                    onChange={handleInputsChange}
                                />
                            </div>

                            <div className="flex flex-col gap-2 p-2 bg-gray-700 rounded ">
                                <div>
                                    <p className="text-sm">Birthday</p>
                                </div>

                                <input
                                    type="text"
                                    placeholder="Day"
                                    value={inputs.day}
                                    className="px-2 py-1 text-xs text-gray-100 bg-transparent border-2 border-solid rounded-sm dark:border-gray-600"
                                    name="day"
                                    onChange={handleInputsChange}
                                />
                                <input
                                    type="text"
                                    placeholder="Month"
                                    className="px-2 py-1 text-xs text-gray-100 bg-transparent border-2 border-solid rounded-sm dark:border-gray-600"
                                    value={inputs.month}
                                    name="month"
                                    onChange={handleInputsChange}
                                />
                                <input
                                    type="text"
                                    className="px-2 py-1 text-xs text-gray-100 bg-transparent border-2 border-solid rounded-sm dark:border-gray-600"
                                    placeholder="Year"
                                    value={inputs.year}
                                    name="year"
                                    onChange={handleInputsChange}
                                />
                            </div>
                        </div>

                        {all && (
                            <div className="flex flex-col gap-2 sm:flex-row ">
                                <div className="flex flex-col flex-auto gap-2 p-2 bg-gray-700 rounded">
                                    <div>
                                        <p className="text-sm">Location</p>
                                    </div>

                                    <input
                                        type="text"
                                        placeholder="Contry"
                                        value={inputs.contry}
                                        className="px-2 py-1 text-xs text-gray-100 bg-transparent border-2 border-solid rounded-sm dark:border-gray-600"
                                        name="contry"
                                        onChange={handleInputsChange}
                                    />
                                    <input
                                        type="text"
                                        placeholder="StreetAddress"
                                        value={inputs.streetAddress}
                                        className="px-2 py-1 text-xs text-gray-100 bg-transparent border-2 border-solid rounded-sm dark:border-gray-600"
                                        name="streetAddress"
                                        onChange={handleInputsChange}
                                    />
                                    <input
                                        type="text"
                                        placeholder="StreetAddressTwo"
                                        value={inputs.streetAddressTwo}
                                        className="px-2 py-1 text-xs text-gray-100 bg-transparent border-2 border-solid rounded-sm dark:border-gray-600"
                                        name="streetAddressTwo"
                                        onChange={handleInputsChange}
                                    />
                                    <input
                                        type="text"
                                        placeholder="PostCode"
                                        value={inputs.postCode}
                                        name="postCode"
                                        onChange={handleInputsChange}
                                        className="px-2 py-1 text-xs text-gray-100 bg-transparent border-2 border-solid rounded-sm dark:border-gray-600"
                                    />
                                    <input
                                        type="text"
                                        placeholder="City"
                                        value={inputs.city}
                                        name="city"
                                        onChange={handleInputsChange}
                                        className="px-2 py-1 text-xs text-gray-100 bg-transparent border-2 border-solid rounded-sm dark:border-gray-600"
                                    />
                                </div>
                                <div className="flex flex-col flex-auto gap-2 p-2 bg-gray-700 rounded">
                                    <div>
                                        <p className="text-sm">Other Info</p>
                                    </div>

                                    <input
                                        type="text"
                                        placeholder="NickName"
                                        value={inputs.nickName}
                                        className="px-2 py-1 text-xs text-gray-100 bg-transparent border-2 border-solid rounded-sm dark:border-gray-600"
                                        name="nickName"
                                        onChange={handleInputsChange}
                                    />

                                    <input
                                        type="text"
                                        placeholder="Company"
                                        value={inputs.company}
                                        className="px-2 py-1 text-xs text-gray-100 bg-transparent border-2 border-solid rounded-sm dark:border-gray-600"
                                        name="company"
                                        onChange={handleInputsChange}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        value={inputs.email}
                                        className="px-2 py-1 text-xs text-gray-100 bg-transparent border-2 border-solid rounded-sm dark:border-gray-600"
                                        name="email"
                                        onChange={handleInputsChange}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Website"
                                        value={inputs.website}
                                        className="px-2 py-1 text-xs text-gray-100 bg-transparent border-2 border-solid rounded-sm dark:border-gray-600"
                                        name="website"
                                        onChange={handleInputsChange}
                                    />
                                    <input
                                        type="text"
                                        placeholder="RelationShip"
                                        value={inputs.relationShip}
                                        className="px-2 py-1 text-xs text-gray-100 bg-transparent border-2 border-solid rounded-sm dark:border-gray-600"
                                        name="relationShip"
                                        onChange={handleInputsChange}
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex-auto" onClick={submitContactChange}>
                        <ActionButton>
                            <p>Submit Changes</p>
                        </ActionButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditContact;
