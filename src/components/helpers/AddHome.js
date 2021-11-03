import React, { useContext, useEffect, useRef, useState } from "react";
import { useMutation } from "@apollo/react-hooks";

// Context
import { ContactContext } from "../../Context/ContactGalleryContext";
import { AlertContext } from "../../Context/SweetAlertContext";

// GraphQL
import { ADD_HOME_TO_CONTACT } from "../../util/GraphQL";

// Icons
import { AiOutlineHome } from "react-icons/ai";
import { GoHome } from "react-icons/go";

const AddHome = ({ setHomeForm }) => {
    const HomeInput = useRef(null);

    const { contextContact, setContextContact } = useContext(ContactContext);
    const { showAlert } = useContext(AlertContext);

    useEffect(() => {
        if (HomeInput) {
            HomeInput.current.focus();
        }
    }, []);

    const [home, setHome] = useState("");

    const [addHomeToContact] = useMutation(ADD_HOME_TO_CONTACT, {
        update: (
            _,
            {
                data: {
                    addHomeToContact: { contact, message },
                },
            }
        ) => {
            setContextContact(contact);
            setHomeForm(false);
            showAlert(message);
        },
        onError(err) {
            console.log(err.graphQLErrors[0].message);
        },
    });

    const submitForm = (event) => {
        event.preventDefault();
        addHomeToContact({
            variables: {
                contactID: contextContact.id,
                home,
            },
        });
    };
    return (
        <div className="fixed z-20 flex flex-col w-2/3 gap-3 p-3 transform -translate-x-1/2 -translate-y-1/2 rounded sm:max-w-sm top-1/2 left-1/2 dark:bg-gray-700">
            <div className="flex items-center gap-2 p-2 text-sm bg-gray-400 rounded dark:bg-gray-600">
                <AiOutlineHome style={{ color: "#D0D3D4" }} />
                <p className="mt-1">Adding Home</p>
            </div>
            <div className="p-2 bg-gray-400 rounded dark:bg-gray-600">
                <form onSubmit={submitForm} className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <div className="p-1 border-2 border-gray-500 rounded">
                            <GoHome />
                        </div>
                        <input
                            className="w-full px-2 text-gray-700 bg-transparent border-2 border-gray-500 rounded dark:text-gray-300"
                            type="text"
                            value={home}
                            autoComplete="none"
                            ref={HomeInput}
                            onChange={(event) => setHome(event.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="py-1.5 duration-200  border-2 border-solid rounded dark:border-gray-400 dark:bg-gray-500 opacity-70 hover:opacity-90 dark:text-white"
                    >
                        Add Home
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddHome;
