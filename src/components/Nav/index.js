import React from "react";

// Components
import Filter from "../ContactsPage/Filter";
import Profile from "../User/Profile";
import Logo from "./Logo";

const Nav = () => {
    return (
        <div className="flex flex-row items-center justify-between h-full px-3 mb-3 bg-gray-100 rounded shadow dark:bg-gray-800">
            <Logo />
            <Filter />
            <Profile />
        </div>
    );
};

export default Nav;
