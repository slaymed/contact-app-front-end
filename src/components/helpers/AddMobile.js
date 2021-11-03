import React, { useContext, useEffect, useRef, useState } from "react";
import { useMutation } from "@apollo/react-hooks";

// Context
import { ContactContext } from "../../Context/ContactGalleryContext";
import { AlertContext } from "../../Context/SweetAlertContext";

// GraphQL
import { ADD_MOBILE_TO_CONTACT } from "../../util/GraphQL";

// Icons
import { FiSmartphone } from "react-icons/fi";
import { BiPhone } from "react-icons/bi";
import { HiBadgeCheck, HiOutlineBadgeCheck } from "react-icons/hi";

// Components
import Tooltip from "./Tooltip";

const AddMobile = ({ setMobileForm }) => {
    const MobileInput = useRef(null);

    useEffect(() => {
        if (MobileInput) {
            MobileInput.current.focus();
        }
    }, []);

    const { contextContact, setContextContact } = useContext(ContactContext);
    const { showAlert } = useContext(AlertContext);

    const [mobile, setMobile] = useState("");
    const [isDefault, setIsDefault] = useState(false);

    const [addMobileToContact] = useMutation(ADD_MOBILE_TO_CONTACT, {
        update: (
            _,
            {
                data: {
                    addMobileToContact: { contact, message },
                },
            }
        ) => {
            setContextContact(contact);
            setMobileForm(false);
            showAlert(message);
        },
        onError(err) {
            console.log(err.graphQLErrors[0].message);
        },
    });

    const submitForm = (event) => {
        event.preventDefault();
        addMobileToContact({
            variables: {
                contactID: contextContact.id,
                mobile,
                isDefault,
            },
        });
    };

    return (
        <div className="fixed z-20 flex flex-col w-2/3 gap-3 p-3 transform -translate-x-1/2 -translate-y-1/2 rounded sm:max-w-sm top-1/2 left-1/2 dark:bg-gray-700">
            <div className="flex items-center gap-2 p-2 text-sm bg-gray-400 rounded dark:bg-gray-600">
                <FiSmartphone style={{ color: "#D0D3D4" }} />
                <p className="mt-1">Adding Mobile</p>
            </div>
            <div className="p-2 bg-gray-400 rounded dark:bg-gray-600">
                <form onSubmit={submitForm} className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <div className="p-1 border-2 border-gray-500 rounded">
                            <BiPhone />
                        </div>
                        <input
                            className="w-full px-2 text-gray-700 bg-transparent border-2 border-gray-500 rounded dark:text-gray-300"
                            type="text"
                            value={mobile}
                            autoComplete="none"
                            ref={MobileInput}
                            onChange={(event) => setMobile(event.target.value)}
                        />
                        <div className="p-1 border-2 border-gray-500 rounded cursor-pointer dark:hover:bg-gray-500">
                            {isDefault ? (
                                <div
                                    className="relative"
                                    onClick={() => setIsDefault(false)}
                                >
                                    <HiBadgeCheck
                                        style={{ color: "#30F55E" }}
                                    />
                                    <Tooltip left={true}>
                                        Cancel Default
                                    </Tooltip>
                                </div>
                            ) : (
                                <div
                                    className="relative"
                                    onClick={() => setIsDefault(true)}
                                >
                                    <HiOutlineBadgeCheck />
                                    <Tooltip left={true}>
                                        Make it Default
                                    </Tooltip>
                                </div>
                            )}
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="py-1.5 duration-200  border-2 border-solid rounded dark:border-gray-400 dark:bg-gray-500 opacity-70 hover:opacity-90 dark:text-white"
                    >
                        Add Mobile
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddMobile;
