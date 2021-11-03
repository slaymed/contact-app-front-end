import React, { useContext, useState } from "react";
import { ContactContext } from "../../../../Context/ContactGalleryContext";

import NickName from "./NickName";
import Company from "./Company";
import Website from "./WebSite";
import Email from "./Email";
import RelationShip from "./RelationShip";

import { CgCalendarToday } from "react-icons/cg";
import { RiArrowDownSLine } from "react-icons/ri";

const RestInfo = () => {
    const {
        contextContact: { nickName, company, website, email, relationShip },
    } = useContext(ContactContext);

    const [all, setAll] = useState(false);

    return (
        <div className="flex flex-col p-3 bg-gray-700 rounded">
            <div className="flex flex-row items-center justify-between text-xs">
                <p className="px-3 py-1 font-normal bg-gray-600 rounded opacity-80">
                    Other Info
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
                <div className="flex flex-wrap gap-2 p-2 mt-2 border-2 border-gray-600 border-solid rounded opacity-70 hover:opacity-100">
                    {nickName && <NickName nickName={nickName} />}
                    {company && <Company company={company} />}
                    {relationShip && (
                        <RelationShip relationShip={relationShip} />
                    )}
                    {website && <Website website={website} />}
                    {email && <Email email={email} />}
                </div>
            )}
        </div>
    );
};

export default RestInfo;
