import React from "react";

// Component
import Tooltip from "../helpers/Tooltip";

const RegistedUser = ({ fastLogin, slayerID, setRegistedUsers }) => {
    const deleteRegistedUser = () => {
        let registedUsers = JSON.parse(localStorage.getItem("REGISTED__USER"));
        if (registedUsers) {
            registedUsers = registedUsers.filter((id) => id !== slayerID);
            localStorage.setItem(
                "REGISTED__USER",
                JSON.stringify(registedUsers)
            );
            setRegistedUsers(registedUsers);
        }
    };

    return (
        <div className="flex items-center flex-auto gap-2 p-2 text-sm duration-200 rounded bg-opacity-60 dark:bg-gray-700 opacity-70 hover:opacity-100">
            <p
                className="flex-auto tracking-wider cursor-pointer"
                onClick={() => fastLogin(slayerID)}
            >
                {slayerID}
            </p>
            <p
                className="relative px-2 duration-200 bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
                onClick={deleteRegistedUser}
            >
                x<Tooltip left={true}>Remove</Tooltip>
            </p>
        </div>
    );
};

export default RegistedUser;
