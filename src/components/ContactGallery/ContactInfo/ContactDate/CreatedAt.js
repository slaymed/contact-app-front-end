import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const CreatedAt = ({ createdAt }) => {
    dayjs.extend(relativeTime);
    return (
        <div className="relative flex flex-auto h-10 overflow-hidden duration-200 rounded card-half card-container dark:bg-gray-600">
            <div className="rounded card card-top">
                <span>Create Date</span>
            </div>
            <div className="px-2 overflow-x-scroll bg-gray-500 rounded card card-down scroll-bar">
                <span className="whitespace-nowrap">
                    {dayjs(createdAt).fromNow()}
                </span>
            </div>
        </div>
    );
};

export default CreatedAt;
