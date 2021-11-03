import React from "react";

// Components
import MenuFilter from "./MenuFilter";
import Logout from "../helpers/Logout";
import Overlay from "../helpers/Overlay";

const Menu = () => {
    return (
        <>
            <div className="lg:hidden">
                <Overlay />
            </div>
            <div className="absolute right-0 z-20 flex flex-col gap-2 p-2 text-xs bg-gray-900 rounded shadow-inner w-52 top-10 lg:hidden">
                <div className="bg-gray-800 rounded sm:hidden">
                    <MenuFilter />
                </div>
                <Logout />
            </div>
        </>
    );
};

export default Menu;
