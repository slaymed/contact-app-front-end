import React, { useContext } from "react";

import { ContactContext } from "../../Context/ContactGalleryContext";

// Components
import ContactHead from "./ContactHead";
import ContactInfo from "./ContactInfo";
import ContactActions from "./ContactActions";

const ContactGallery = () => {
    const { hidden, contextContact } = useContext(ContactContext);

    return (
        <div className="z-20 flex flex-col gap-3 p-3 cont">
            {hidden || !contextContact ? (
                <div className="flex flex-col h-full ">
                    <div className="flex items-center justify-center flex-1 text-xl">
                        <span>Contact Gallery</span>
                    </div>
                </div>
            ) : (
                <>
                    <ContactHead />
                    <ContactInfo />
                    <ContactActions />
                </>
            )}
        </div>
    );
};

export default ContactGallery;
