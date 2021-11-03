import React from "react";

const NickName = ({ nickName }) => {
    return (
        <div className="relative flex flex-auto h-12 overflow-hidden duration-200 rounded card-half card-container dark:bg-gray-600">
            <div className="rounded card card-top">
                <span>Nick Name</span>
            </div>
            <div className="px-2 overflow-x-auto bg-gray-500 rounded scroll-bar card card-down">
                <span className="whitespace-nowrap">{nickName}</span>
            </div>
        </div>
    );
};

export default NickName;
