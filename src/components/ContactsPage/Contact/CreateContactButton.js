import React, { useState } from "react";

// Icons
import { BiUserPlus } from "react-icons/bi";

// Components
import Overlay from "../../helpers/Overlay";
import CreateContactForm from "./CreateContactForm";

const CreateContactButton = () => {
    const [contactForm, setContactForm] = useState(false);
    return (
        <>
            <div
                className="z-10 flex items-center gap-2 p-2 duration-200 rounded cursor-pointer dark:bg-gray-700 opacity-80 hover:opacity-100"
                onClick={() => setContactForm(true)}
            >
                <BiUserPlus />
                <span className="flex-auto">Create Contact</span>
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

export default CreateContactButton;
