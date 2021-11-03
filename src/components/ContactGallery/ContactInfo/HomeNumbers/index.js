import React, { useContext, useEffect, useState } from "react";
import { BsPlus } from "react-icons/bs";
import { RiArrowDownSLine } from "react-icons/ri";

import { ContactContext } from "../../../../Context/ContactGalleryContext";
import AddHome from "../../../helpers/AddHome";
import Overlay from "../../../helpers/Overlay";
import Tooltip from "../../../helpers/Tooltip";
import HomeNumber from "./HomeNumber";

const HomeNumbers = () => {
    const { contextContact } = useContext(ContactContext);

    const [all, setAll] = useState(false);

    const [homeForm, setHomeForm] = useState(false);

    useEffect(() => {
        if (contextContact) {
            if (contextContact.homeNumbers.length === 1) {
                setAll(false);
            }
        }
    }, [contextContact]);

    const showOthersNumbers = () => {
        if (contextContact.homeNumbers.length > 1) {
            setAll(!all);
        }
    };

    return (
        <div className="flex flex-col gap-2 p-3 bg-gray-700 rounded">
            <div className="flex flex-row items-center justify-between text-xs">
                <div className="flex gap-3">
                    <p className="px-3 py-1 font-normal bg-gray-600 rounded opacity-80">
                        Home
                    </p>
                    <p className="px-2 py-1 bg-gray-600 rounded opacity-80">
                        {contextContact.homeNumbers.length}
                    </p>
                    <div
                        className="flex w-6 h-6 p-0.5 relative items-center justify-center duration-100 bg-gray-600 rounded cursor-pointer opacity-80 hover:opacity-100 hover:bg-gray-500"
                        onClick={() => setHomeForm(true)}
                    >
                        <BsPlus />
                        <Tooltip right={true}>Add Home</Tooltip>
                    </div>
                </div>
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

            {contextContact.homeNumbers.length > 0 ? (
                all ? (
                    contextContact.homeNumbers.map((number) => (
                        <div key={number.id}>
                            <HomeNumber number={number} />
                        </div>
                    ))
                ) : (
                    <HomeNumber number={contextContact.homeNumbers[0]} />
                )
            ) : (
                ""
            )}

            {homeForm && (
                <>
                    <Overlay onClick={() => setHomeForm(false)} />
                    <AddHome setHomeForm={setHomeForm} />
                </>
            )}
        </div>
    );
};

export default HomeNumbers;
