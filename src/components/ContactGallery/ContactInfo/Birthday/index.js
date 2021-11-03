import React, { useState } from "react";

// Icons
import { CgCalendarToday } from "react-icons/cg";
import { RiArrowDownSLine } from "react-icons/ri";

const Birthday = ({ birthday: { day, month, year } }) => {
    const [all, setAll] = useState(false);
    return (
        <div className="flex flex-col p-3 bg-gray-700 rounded">
            <div className="flex flex-row items-center justify-between text-xs">
                <p className="px-3 py-1 font-normal bg-gray-600 rounded opacity-80">
                    Birthday
                </p>
                <div
                    className="flex items-center justify-center duration-100 bg-gray-600 rounded cursor-pointer opacity-80 hover:opacity-100 hover:bg-gray-500"
                    onClick={() => setAll(!all)}
                >
                    <RiArrowDownSLine
                        style={{ color: "" }}
                        className={`duration-200 ${
                            all && " transform  rotate-180"
                        }`}
                    />
                </div>
            </div>

            {all && (
                <div className="flex items-center gap-2 p-2 mt-2 text-center duration-200 border-2 border-gray-600 border-solid rounded opacity-70 hover:opacity-100">
                    <div className="p-2 bg-gray-600 rounded ">
                        <CgCalendarToday
                            style={{ color: "#D0D3D4", fontSize: "0.875rem" }}
                        />
                    </div>
                    <div className="flex-1 p-2 overflow-auto bg-gray-600 rounded scroll-bar">
                        {day}
                    </div>
                    <div className="flex-1 p-2 overflow-auto bg-gray-600 rounded scroll-bar">
                        {month}
                    </div>
                    <div className="flex-grow p-2 overflow-auto bg-gray-600 rounded scroll-bar">
                        {year}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Birthday;
