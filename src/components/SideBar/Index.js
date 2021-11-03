import React from "react";

// Context
import Logout from "../helpers/Logout";
import CreateContactButton from "../ContactsPage/Contact/CreateContactButton";

const SideBar = () => {
    return (
        <div className="hidden row-span-6 bg-gray-100 rounded shadow dark:bg-gray-800 lg:block lg:col-span-3 xl:col-span-2">
            <div className="flex flex-col justify-between gap-2 cont">
                <div className="flex flex-col gap-2 p-2">
                    <CreateContactButton />
                </div>
                <div className="p-2 duration-200 rounded opacity-70 hover:opacity-100">
                    <Logout />
                </div>
            </div>
        </div>
    );
};

export default SideBar;
