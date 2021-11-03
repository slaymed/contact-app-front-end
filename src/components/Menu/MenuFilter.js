import React, { useContext } from "react";

// Components
import { FilterContext } from "../../Context/FilterContext";

// Icons
import { BiGridSmall } from "react-icons/bi";
import { RiStarSFill } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";

const Filter = () => {
    const {
        famillyFilter,
        favoriteFilter,
        justFamilly,
        justFavorite,
        allContacts,
    } = useContext(FilterContext);

    return (
        <div className="flex flex-col gap-1">
            <div
                onClick={allContacts}
                className={`flex flex-auto items-center gap-1 p-1 duration-200  rounded cursor-pointer hover:bg-gray-700 ${
                    !famillyFilter && !favoriteFilter && "bg-gray-700 shadow"
                }`}
            >
                <BiGridSmall style={{ color: "#BDC3C7" }} />
                <p>All</p>
            </div>
            <div
                onClick={justFamilly}
                className={` flex flex-auto gap-1 items-center  p-1  duration-200 rounded cursor-pointer hover:bg-gray-700  ${
                    !favoriteFilter && famillyFilter && "bg-gray-700 shadow"
                }`}
            >
                <FaUserFriends style={{ color: "#BDC3C7", padding: "4px" }} />
                <p>Familly </p>
            </div>
            <div
                onClick={justFavorite}
                className={`p-1 flex flex-auto gap-1 items-center  duration-200  rounded cursor-pointer hover:bg-gray-700 ${
                    !famillyFilter && favoriteFilter && "bg-gray-700 shadow"
                }`}
            >
                <RiStarSFill style={{ color: "#BDC3C7", padding: "4px" }} />
                <p>Favorite </p>
            </div>
        </div>
    );
};

export default Filter;
