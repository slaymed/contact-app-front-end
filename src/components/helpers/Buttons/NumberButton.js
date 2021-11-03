import React from "react";

const NumberButton = ({ children, ...rest }) => {
    return (
        <div
            className={`p-2 ml-2 relative duration-200 bg-gray-600 rounded cursor-pointer hover:bg-gray-500`}
            {...rest}
        >
            {children}
        </div>
    );
};

export default NumberButton;
