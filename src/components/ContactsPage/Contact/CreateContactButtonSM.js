import React, { useContext, useState } from "react";

// Icons
import { BiPlus } from "react-icons/bi";

// Context
import { ContactContext } from "../../../Context/ContactGalleryContext";

// Components
import Overlay from "../../helpers/Overlay";
import CreateContactForm from "./CreateContactForm";

const CreateContactButtonSM = () => {
    const [contactForm, setContactForm] = useState(false);
    const { hidden } = useContext(ContactContext);
    return (
        <>
            <div
                className={`${
                    !hidden && "hidden"
                } absolute sm:flex items-center justify-center p-5 duration-200 rounded-full cursor-pointer lg:hidden right-5 bottom-5 dark:bg-gray-600 opacity-80 hover:opacity-100 `}
                onClick={() => setContactForm(true)}
            >
                <BiPlus />
            </div>
            {contactForm && (
                <>
                    <Overlay onClick={() => setContactForm(false)} />
                    <CreateContactForm setContactForm={setContactForm} />
                </>
            )}
        </>
    );
};

export default CreateContactButtonSM;
