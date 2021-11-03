import React, { useContext, useState } from "react";

import { RiArrowDownSLine } from "react-icons/ri";

const ContactLocation = ({
    location: { contry, streetAddress, streetAddressTwo, city, postCode },
}) => {
    const [all, setAll] = useState(false);

    const showOthersNumbers = () => {
        setAll(!all);
    };

    return (
        <div className="flex flex-col p-3 bg-gray-700 rounded">
            <div className="flex flex-row items-center justify-between text-xs">
                <p className="px-3 py-1 font-normal bg-gray-600 rounded opacity-80">
                    Location
                </p>
                <div
                    className="flex items-center justify-center duration-100 bg-gray-600 rounded cursor-pointer opacity-80 hover:opacity-100 hover:bg-gray-500"
                    onClick={showOthersNumbers}
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
                <div className="flex flex-col gap-2 p-2 mt-2 text-sm font-light duration-200 border-2 border-gray-600 border-solid rounded opacity-70 hover:opacity-100">
                    {streetAddress || streetAddressTwo || contry ? (
                        <div className="flex-auto px-3 py-2 overflow-auto bg-gray-600 rounded whitespace-nowrap scroll-bar">
                            {`${streetAddress && streetAddress}  ${
                                "•" &&
                                streetAddressTwo &&
                                streetAddressTwo &&
                                "•"
                            }  ${contry && contry}`}
                        </div>
                    ) : (
                        ""
                    )}
                    {city || postCode ? (
                        <div className="flex flex-row justify-between rounded">
                            <span className="px-3 py-2 bg-gray-600 rounded">
                                {city}
                            </span>
                            <span className="px-3 py-2 bg-gray-600 rounded">
                                {postCode}
                            </span>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            )}
        </div>
    );
};

export default ContactLocation;
