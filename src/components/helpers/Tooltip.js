import React from "react";

const Tooltip = ({ children, top, left, right, bottom }) => {
    return (
        <div className="hover-location">
            <div
                className={` text-gray-200 bg-gray-800  tooltip dark:bg-gray-300 dark:text-gray-900 ${
                    top && "top"
                }
                ${right && "right"}
                ${left && "left"}
                ${bottom && "bottom"}`}
            >
                <span className="whitespace-nowrap">{children}</span>
            </div>
        </div>
    );
};

export default Tooltip;
