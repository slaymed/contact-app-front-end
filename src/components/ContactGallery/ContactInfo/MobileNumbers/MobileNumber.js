import React from "react";

import { VscVerified } from "react-icons/vsc";
import { FiSmartphone } from "react-icons/fi";

import ChangeDefault from "../../../helpers/ChangeDefault";
import DeleteMobile from "../../../helpers/DeleteMobile";
import Tooltip from "../../../helpers/Tooltip";

const MobileNumber = ({ number: { mobile, isDefault, type } }) => {
    return (
        <div className="flex items-center p-2 duration-200 border-2 border-gray-600 border-solid rounded opacity-70 hover:opacity-100">
            <div className="relative hidden p-2 mr-2 bg-gray-600 rounded -90 lg:block">
                <FiSmartphone style={{ color: "#D0D3D4" }} />
                <Tooltip right={true}>Mobile</Tooltip>
            </div>
            <div className="flex-auto px-3 py-2 overflow-auto bg-gray-600 rounded scroll-bar">
                {mobile}
            </div>
            {!isDefault && <ChangeDefault mobile={mobile} />}
            {!isDefault && <DeleteMobile mobile={mobile} />}
            {isDefault && (
                <div className="relative p-2 ml-2 bg-gray-600 rounded">
                    <VscVerified style={{ color: "#D0D3D4" }} />
                    <Tooltip left={true}>Default Number</Tooltip>
                </div>
            )}
        </div>
    );
};

export default MobileNumber;
