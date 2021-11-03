import React from "react";

const Email = ({ email }) => {
    return (
        <div className="relative flex flex-auto h-12 overflow-hidden duration-200 rounded card-half card-container dark:bg-gray-600">
            <div className="rounded card card-top">
                <span>Email</span>
            </div>
            <div className="overflow-x-auto bg-gray-500 rounded scroll-bar card card-down">
                <span className="whitespace-nowrap">{email}</span>
            </div>
        </div>
    );
};

export default Email;
