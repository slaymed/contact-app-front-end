import React from "react";

const Overlay = ({ children, ...rest }) => {
    return (
        <div
            {...rest}
            className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-60"
        >
            {children}
        </div>
    );
};

export default Overlay;
