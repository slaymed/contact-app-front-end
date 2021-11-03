import React, { useContext } from "react";
import { ContactContext } from "../../../../Context/ContactGalleryContext";
import CreatedAt from "./CreatedAt";
import UpdatedAt from "./UpdatedAt";

const ContactDate = () => {
    const {
        contextContact: { createdAt, editedAt },
    } = useContext(ContactContext);

    return (
        <div className="flex flex-row gap-2 rounded opacity-70 hover:opacity-100 ">
            <CreatedAt createdAt={createdAt} />
            <UpdatedAt editedAt={editedAt} />
        </div>
    );
};

export default ContactDate;
