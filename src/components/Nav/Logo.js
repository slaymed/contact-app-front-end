import React from "react";

// Icons
import { FcContacts } from "react-icons/fc";

const Logo = () => {
    return (
        <div className="flex items-center gap-2 pl-2 tracking-wider">
            <FcContacts />
            Slayer Contacts
        </div>
    );
};

export default Logo;
