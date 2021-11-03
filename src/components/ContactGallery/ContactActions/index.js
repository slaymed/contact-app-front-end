import React from "react";

import ToggleFavorite from "../../helpers/ToggleFavorite";
import ToggleFamilly from "../../helpers/ToggleFamilly";
import { DeleteContact } from "../../helpers/DeleteContact";
import { EditContactButton } from "../../helpers/EditContactButton";

const ContactActions = () => {
    return (
        <div className="flex items-center justify-between gap-3 p-3 transition-all duration-200 bg-gray-700 rounded">
            <EditContactButton />
            <ToggleFamilly />
            <ToggleFavorite />
            <DeleteContact />
        </div>
    );
};

export default ContactActions;
