import React, { useContext, useRef } from "react";

// Context
import { FilterContext } from "../../../Context/FilterContext";

// Icons
import { BiGridSmall } from "react-icons/bi";
import { RiStarSFill } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { ImCancelCircle } from "react-icons/im";

// Components
import Tooltip from "../../helpers/Tooltip";

const Filter = () => {
    const searchInput = useRef(null);

    const {
        famillyFilter,
        favoriteFilter,
        searchFilter,
        searchValue,
        setSearchFilter,
        setSearchValue,
        justFamilly,
        justFavorite,
        allContacts,
    } = useContext(FilterContext);

    const handleSearch = () => {
        setSearchFilter();
        searchInput.current.focus();
    };

    return (
        <div className="hidden sm:flex">
            {!searchFilter && (
                <div className="flex gap-3">
                    <div
                        onClick={allContacts}
                        className={`p-1 relative  duration-200 border-gray-700 border border-double rounded cursor-pointer hover:bg-gray-700 ${
                            !famillyFilter &&
                            !favoriteFilter &&
                            !searchFilter &&
                            "bg-gray-700 shadow"
                        }`}
                    >
                        <BiGridSmall style={{ color: "#BDC3C7" }} />
                        <Tooltip bottom={true}>All Contacts</Tooltip>
                    </div>
                    <div
                        onClick={justFamilly}
                        className={`p-1 relative  duration-200 border-gray-700 border border-double rounded cursor-pointer hover:bg-gray-700  ${
                            !favoriteFilter &&
                            !searchFilter &&
                            famillyFilter &&
                            "bg-gray-700 shadow"
                        }`}
                    >
                        <FaUserFriends
                            style={{ color: "#BDC3C7", padding: "4px" }}
                        />
                        <Tooltip bottom={true}>Your Familly</Tooltip>
                    </div>
                    <div
                        onClick={justFavorite}
                        className={`p-1 relative  duration-200 border-gray-700 border border-double rounded cursor-pointer hover:bg-gray-700 ${
                            !famillyFilter &&
                            !searchFilter &&
                            favoriteFilter &&
                            "bg-gray-700 shadow"
                        }`}
                    >
                        <RiStarSFill
                            style={{ color: "#BDC3C7", padding: "4px" }}
                        />
                        <Tooltip bottom={true}>Your Favorites</Tooltip>
                    </div>
                </div>
            )}

            <input
                className={` text-gray-400 origin-right md:duration-200  w-0 transform scale-x-0 bg-transparent  rounded ${
                    searchFilter &&
                    "scale-x-100 w-40 md:w-52 sm:duration-200 px-3 py-1 border-2 border-gray-700 border-solid"
                }`}
                type="text"
                placeholder="Search"
                value={searchValue}
                ref={searchInput}
                onChange={(event) => setSearchValue(event.target.value)}
            />

            {searchFilter ? (
                <div
                    onClick={allContacts}
                    className="relative p-1 ml-3 duration-200 border-2 border-gray-700 border-double rounded cursor-pointer hover:bg-gray-700"
                >
                    <ImCancelCircle
                        style={{ color: "#BDC3C7", padding: "4px" }}
                    />
                    <Tooltip bottom={true}>Close Search</Tooltip>
                </div>
            ) : (
                <div
                    onClick={handleSearch}
                    className="relative p-1 ml-3 duration-200 border border-gray-700 border-double rounded cursor-pointer hover:bg-gray-700"
                >
                    <BiSearch style={{ color: "#BDC3C7", padding: "4px" }} />
                    <Tooltip bottom={true}>Search</Tooltip>
                </div>
            )}
        </div>
    );
};

export default Filter;
