import React from "react";

const Company = ({ company }) => {
    return (
        <div className="relative flex flex-auto h-12 overflow-hidden duration-200 rounded card-half card-container dark:bg-gray-600">
            <div className="rounded card card-top">
                <span>Company</span>
            </div>
            <div className="px-2 overflow-x-auto bg-gray-500 rounded scroll-bar card card-down">
                <span className="whitespace-nowrap">{company}</span>
            </div>
        </div>
    );
};

export default Company;
