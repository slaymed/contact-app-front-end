import React, { useContext } from "react";

// Context
import { AuthContext } from "../../Context/UserContext";

// Icons
import { IoLogOut } from "react-icons/io5";

const Logout = () => {
    const { logout } = useContext(AuthContext);
    return (
        <div
            onClick={logout}
            className="flex items-center flex-auto gap-1 p-1 duration-200 bg-gray-800 rounded cursor-pointer hover:bg-gray-700 "
        >
            <IoLogOut style={{ color: "#BDC3C7", padding: "2px" }} />
            <p>Log out </p>
        </div>
    );
};

export default Logout;
