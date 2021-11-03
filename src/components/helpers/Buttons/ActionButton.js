import React from "react";

const ActionButton = ({ children, ...rest }) => {
    return (
        <div
            className="relative flex items-center justify-center flex-1 p-3 transition-all duration-200 bg-gray-600 rounded cursor-pointer hover:bg-gray-500 opacity-80 hover:opacity-100"
            {...rest}
        >
            {children}
        </div>
    );
};

export default ActionButton;
