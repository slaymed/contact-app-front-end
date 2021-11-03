import React, { useContext } from "react";

// Context
import { ContactContext } from "../../../Context/ContactGalleryContext";

// Icons
import { FaPhoneSquareAlt } from "react-icons/fa";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { IoMdArrowRoundBack } from "react-icons/io";

const ContactHead = () => {
    const { contextContact, head_ShowContextContact } =
        useContext(ContactContext);
    return (
        <div className="flex flex-none gap-2">
            <div
                className="flex items-center justify-center p-2 duration-200 bg-gray-200 rounded cursor-pointer dark:bg-gray-700 dark:hover:bg-gray-600 sm:hidden"
                onClick={head_ShowContextContact}
            >
                <IoMdArrowRoundBack style={{ color: "inherit" }} />
            </div>
            <div className="flex items-center justify-center w-full p-3 duration-200 bg-gray-200 rounded dark:bg-gray-700">
                {contextContact.firstName || contextContact.lastName ? (
                    <RiAccountPinCircleFill
                        className="mr-3"
                        style={{ color: "inherit" }}
                    />
                ) : (
                    ""
                )}

                {contextContact.firstName && (
                    <h2 className="mr-1 text-lg font-bold ">
                        {contextContact.firstName}
                    </h2>
                )}
                {contextContact.lastName && (
                    <h2 className="text-lg font-bold ">
                        {contextContact.lastName}
                    </h2>
                )}

                {!contextContact.firstName &&
                    !contextContact.lastName &&
                    contextContact.numbers.map(
                        (number) =>
                            number.isDefault && (
                                <>
                                    <FaPhoneSquareAlt
                                        style={{
                                            color: "inherit",
                                        }}
                                        className="mr-3"
                                    />
                                    <h2 className="text-lg font-bold ">
                                        {number.mobile}
                                    </h2>
                                </>
                            )
                    )}
            </div>
        </div>
    );
};

export default ContactHead;
