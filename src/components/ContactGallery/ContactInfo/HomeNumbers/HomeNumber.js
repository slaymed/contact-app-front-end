import React from "react";

import { AiOutlineHome } from "react-icons/ai";

import DeleteHome from "../../../helpers/DeleteHome";
import Tooltip from "../../../helpers/Tooltip";

const HomeNumber = ({ number: { home } }) => {
    return (
        <div className="flex items-center p-2 duration-200 border-2 border-gray-600 border-solid rounded opacity-70 hover:opacity-100">
            <div className="relative hidden p-2 mr-2 bg-gray-600 rounded -90 lg:block">
                <AiOutlineHome style={{ color: "#D0D3D4" }} />
                <Tooltip right={true}>Home</Tooltip>
            </div>
            <div className="flex-auto px-3 py-2 overflow-auto bg-gray-600 rounded scroll-bar ">
                {home}
            </div>
            <DeleteHome home={home} />
        </div>
    );
};

export default HomeNumber;
