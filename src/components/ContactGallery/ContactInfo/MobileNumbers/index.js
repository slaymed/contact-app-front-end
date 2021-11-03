import React, { useContext, useEffect, useState } from "react";

import { ContactContext } from "../../../../Context/ContactGalleryContext";

import MobileNumber from "./MobileNumber";

import { RiArrowDownSLine } from "react-icons/ri";
import { BsPlus } from "react-icons/bs";

import NumberButton from "../../../helpers/Buttons/NumberButton";
import Tooltip from "../../../helpers/Tooltip";
import Overlay from "../../../helpers/Overlay";
import AddMobile from "../../../helpers/AddMobile";

const Numbers = () => {
    const { contextContact } = useContext(ContactContext);

    const [numbers, setNumbers] = useState([]);
    const [defaultNumber, setDefaultNumber] = useState({});

    const [mobileForm, setMobileForm] = useState(false);

    const [all, setAll] = useState(false);

    useEffect(() => {
        if (contextContact) {
            if (contextContact.numbers && contextContact.numbers.length > 1) {
                const [defaultNumber] = contextContact.numbers.filter(
                    (number) => number.isDefault
                );
                setDefaultNumber(defaultNumber);
                const restNumbers = contextContact.numbers.filter(
                    (number) => number.isDefault !== true
                );
                setNumbers(restNumbers);
            }
            if (contextContact.numbers && contextContact.numbers.length === 1) {
                setDefaultNumber(contextContact.numbers[0]);
                setNumbers([]);
                setAll(false);
            }
        }
    }, [contextContact]);

    const showOthersNumbers = () => {
        if (numbers.length) {
            setAll(!all);
        }
    };

    return (
        <div className="flex flex-col gap-2 p-3 bg-gray-700 rounded ">
            <div className="flex flex-row items-center justify-between text-xs">
                <div className="flex gap-3">
                    <p className="px-3 py-1 font-normal bg-gray-600 rounded opacity-80">
                        Mobile
                    </p>
                    <p className="px-2 py-1 bg-gray-600 rounded opacity-80">
                        {contextContact.numbers.length}
                    </p>
                    <div
                        className="flex w-6 h-6 p-0.5 relative items-center justify-center duration-100 bg-gray-600 rounded cursor-pointer opacity-80 hover:opacity-100 hover:bg-gray-500"
                        onClick={() => setMobileForm(true)}
                    >
                        <BsPlus />
                        <Tooltip right={true}>Add Mobile</Tooltip>
                    </div>
                </div>
                <div
                    className="flex items-center justify-center duration-100 bg-gray-600 rounded cursor-pointer opacity-80 hover:opacity-100 hover:bg-gray-500"
                    onClick={showOthersNumbers}
                >
                    <RiArrowDownSLine
                        className={`duration-200 ${
                            all && " transform  rotate-180"
                        }`}
                    />
                </div>
            </div>
            {defaultNumber && <MobileNumber number={defaultNumber} />}

            {all &&
                numbers.map((number) => (
                    <MobileNumber key={number.id} number={number} />
                ))}

            {mobileForm && (
                <>
                    <Overlay onClick={() => setMobileForm(false)} />
                    <AddMobile setMobileForm={setMobileForm} />
                </>
            )}
        </div>
    );
};

export default Numbers;
