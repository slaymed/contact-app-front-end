import { useMutation } from "@apollo/react-hooks";
import React, { useContext, useState } from "react";

import { BsFillPersonCheckFill, BsFillPersonPlusFill } from "react-icons/bs";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { RiArrowDownSLine } from "react-icons/ri";

import {
    CREATE_CONTACT_MUTATION,
    GET_CONTACTS_QUERY,
} from "../../../util/GraphQL";

import Tooltip from "../../helpers/Tooltip";
import ActionButton from "../../helpers/Buttons/ActionButton";
import { AlertContext } from "../../../Context/SweetAlertContext";

const CreateContactForm = ({ setContactForm }) => {
    const { showAlert } = useContext(AlertContext);

    const initialContactInfo = {
        firstName: "",
        middleName: "",
        lastName: "",
        itsFamilly: false,
        itsFavorite: false,
        isDefault: true,
        contry: "",
        streetAddress: "",
        streetAddressTwo: "",
        postCode: "",
        city: "",
        day: "",
        month: "",
        year: "",
        mobile: "",
        home: "",
        nickName: "",
        company: "",
        email: "",
        website: "",
        relationShip: "",
    };

    const [all, setAll] = useState(false);

    const [contactInput, setContactInput] = useState(initialContactInfo);
    const [errors, setErrors] = useState({});

    const handleContactInfoChange = (event) => {
        setContactInput({
            ...contactInput,
            [event.target.name]: event.target.value,
        });
    };

    const [createContact] = useMutation(CREATE_CONTACT_MUTATION, {
        variables: contactInput,

        update: (proxy, result) => {
            const data = proxy.readQuery({
                query: GET_CONTACTS_QUERY,
                variables: contactInput,
            });
            data.getContacts = [
                result.data.createContact.contact,
                ...data.getContacts,
            ];
            proxy.writeQuery({
                query: GET_CONTACTS_QUERY,
                data,
                variables: contactInput,
            });
            setContactForm(false);
            showAlert(result.data.createContact.message);
        },
        onError(err) {
            setErrors(err.graphQLErrors[0].extensions.errors);
        },
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        createContact();
    };
    return (
        <div className="fixed z-20 flex flex-col w-3/4 gap-3 p-4 transform -translate-x-1/2 -translate-y-1/2 rounded sm:w-auto top-1/2 left-1/2 dark:bg-gray-800">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-2 contact-form"
            >
                <div className="flex justify-between">
                    <p>Create Contact</p>
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
                                type="text "
                                className="px-2 py-1 text-xs text-gray-100 bg-transparent border-2 border-solid rounded-sm dark:border-gray-600"
                                name="firstName"
                                onChange={handleContactInfoChange}
                                autoComplete="off"
                                placeholder="First Name"
                            />
                            <input
                                type="text"
                                className="px-2 py-1 text-xs text-gray-100 bg-transparent border-2 border-solid rounded-sm dark:border-gray-600"
                                name="middleName"
                                onChange={handleContactInfoChange}
                                autoComplete="off"
                                placeholder="Middle Name"
                            />
                            <input
                                type="text"
                                className="px-2 py-1 text-xs text-gray-100 bg-transparent border-2 border-solid rounded-sm dark:border-gray-600"
                                name="lastName"
                                onChange={handleContactInfoChange}
                                autoComplete="off"
                                placeholder="Last Name"
                            />
                        </div>

                        <div className="flex flex-col gap-2 p-2 bg-gray-700 rounded ">
                            <div>
                                <p className="text-sm">Numbers</p>
                            </div>
                            <input
                                type="text"
                                className="px-2 py-1 text-xs text-gray-100 bg-transparent border-2 border-solid rounded-sm dark:border-gray-600"
                                name="mobile"
                                onChange={handleContactInfoChange}
                                autoComplete="off"
                                placeholder="Mobile"
                            />
                            <input
                                type="text"
                                className="px-2 py-1 text-xs text-gray-100 bg-transparent border-2 border-solid rounded-sm dark:border-gray-600"
                                name="home"
                                onChange={handleContactInfoChange}
                                autoComplete="off"
                                placeholder="Home Number"
                            />
                            <input
                                type="email"
                                name="email"
                                className="px-2 py-1 text-xs text-gray-100 bg-transparent border-2 border-solid rounded-sm dark:border-gray-600"
                                onChange={handleContactInfoChange}
                                autoComplete="off"
                                placeholder="Email"
                            />
                        </div>

                        {all && (
                            <div className="flex flex-col gap-2 p-2 bg-gray-700 rounded ">
                                <div>
                                    <p className="text-sm">Birthday</p>
                                </div>
                                <input
                                    type="text"
                                    name="day"
                                    className="px-2 py-1 text-xs text-gray-100 bg-transparent border-2 border-solid rounded-sm dark:border-gray-600"
                                    onChange={handleContactInfoChange}
                                    autoComplete="off"
                                    placeholder="Day"
                                />
                                <input
                                    type="text"
                                    name="month"
                                    className="px-2 py-1 text-xs text-gray-100 bg-transparent border-2 border-solid rounded-sm dark:border-gray-600"
                                    onChange={handleContactInfoChange}
                                    autoComplete="off"
                                    placeholder="Month"
                                />
                                <input
                                    type="text"
                                    name="year"
                                    className="px-2 py-1 text-xs text-gray-100 bg-transparent border-2 border-solid rounded-sm dark:border-gray-600"
                                    onChange={handleContactInfoChange}
                                    autoComplete="off"
                                    placeholder="Year"
                                />
                            </div>
                        )}
                    </div>

                    {all && (
                        <div className="flex flex-col gap-2 sm:flex-row ">
                            <div className="flex flex-col flex-auto gap-2 p-2 bg-gray-700 rounded">
                                <div>
                                    <p className="text-sm">Location</p>
                                </div>
                                <input
                                    type="text"
                                    name="contry"
                                    onChange={handleContactInfoChange}
                                    autoComplete="off"
                                    placeholder="Contry"
                                    className="px-2 py-1 text-xs text-gray-100 bg-transparent border-2 border-solid rounded-sm dark:border-gray-600"
                                />
                                <input
                                    type="text"
                                    name="streetAddress"
                                    onChange={handleContactInfoChange}
                                    autoComplete="off"
                                    placeholder="Street Address"
                                    className="px-2 py-1 text-xs text-gray-100 bg-transparent border-2 border-solid rounded-sm dark:border-gray-600"
                                />
                                <input
                                    type="text"
                                    name="streetAddressTwo"
                                    onChange={handleContactInfoChange}
                                    autoComplete="off"
                                    placeholder="Street Address 2"
                                    className="px-2 py-1 text-xs text-gray-100 bg-transparent border-2 border-solid rounded-sm dark:border-gray-600"
                                />
                                <input
                                    type="text"
                                    name="postCode"
                                    onChange={handleContactInfoChange}
                                    autoComplete="off"
                                    placeholder=" Postal Code"
                                    className="px-2 py-1 text-xs text-gray-100 bg-transparent border-2 border-solid rounded-sm dark:border-gray-600"
                                />
                                <input
                                    type="text"
                                    name="city"
                                    onChange={handleContactInfoChange}
                                    autoComplete="off"
                                    className="px-2 py-1 text-xs text-gray-100 bg-transparent border-2 border-solid rounded-sm dark:border-gray-600"
                                    placeholder="City"
                                />
                            </div>
                            <div className="flex flex-col flex-auto gap-2 p-2 bg-gray-700 rounded">
                                <div>
                                    <p className="text-sm">Other Info</p>
                                </div>
                                <input
                                    type="text"
                                    name="nickName"
                                    onChange={handleContactInfoChange}
                                    className="px-2 py-1 text-xs text-gray-100 bg-transparent border-2 border-solid rounded-sm dark:border-gray-600"
                                    autoComplete="off"
                                    placeholder="Nick Name"
                                />
                                <input
                                    type="text"
                                    name="company"
                                    onChange={handleContactInfoChange}
                                    className="px-2 py-1 text-xs text-gray-100 bg-transparent border-2 border-solid rounded-sm dark:border-gray-600"
                                    autoComplete="off"
                                    placeholder="Company"
                                />
                                <input
                                    type="text"
                                    name="website"
                                    onChange={handleContactInfoChange}
                                    className="px-2 py-1 text-xs text-gray-100 bg-transparent border-2 border-solid rounded-sm dark:border-gray-600"
                                    autoComplete="off"
                                    placeholder="Web Site"
                                />
                                <input
                                    type="text"
                                    name="relationShip"
                                    onChange={handleContactInfoChange}
                                    className="px-2 py-1 text-xs text-gray-100 bg-transparent border-2 border-solid rounded-sm dark:border-gray-600"
                                    autoComplete="off"
                                    placeholder="Relation Ship"
                                />
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex gap-2">
                    <ActionButton
                        onClick={() =>
                            setContactInput({
                                ...contactInput,
                                itsFavorite: !contactInput.itsFavorite,
                            })
                        }
                    >
                        {contactInput.itsFavorite ? (
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

                    <ActionButton
                        onClick={() =>
                            setContactInput({
                                ...contactInput,
                                itsFamilly: !contactInput.itsFamilly,
                            })
                        }
                    >
                        {contactInput.itsFamilly ? (
                            <>
                                <BsFillPersonCheckFill
                                    style={{ color: "#1DDA39" }}
                                />
                                <Tooltip top={true}>Remove Familly</Tooltip>
                            </>
                        ) : (
                            <>
                                <BsFillPersonPlusFill
                                    style={{ color: "inherit" }}
                                />
                                <Tooltip top={true}>Add Familly</Tooltip>
                            </>
                        )}
                    </ActionButton>
                    <div className="flex-auto">
                        <ActionButton>
                            <button type="submit">Submit</button>
                        </ActionButton>
                    </div>
                </div>
            </form>

            {errors &&
                Object.keys(errors).map((key) => (
                    <p key={key}>{errors[key]}</p>
                ))}
        </div>
    );
};

export default CreateContactForm;
