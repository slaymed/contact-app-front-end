import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const UpdatedAt = ({ editedAt }) => {
    dayjs.extend(relativeTime);
    return (
        <div className="relative flex flex-auto h-10 overflow-hidden duration-200 rounded card-half card-container dark:bg-gray-600">
            <div className="rounded card card-top">
                <span>Update Date</span>
            </div>
            <div className="px-2 overflow-x-scroll bg-gray-500 rounded scroll-bar card card-down">
                <span className="whitespace-nowrap">
                    {dayjs(editedAt).fromNow()}
                </span>
            </div>
        </div>
    );
};

export default UpdatedAt;
