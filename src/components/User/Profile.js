import React, { useContext, useState } from "react";

// Context
import { AuthContext } from "../../Context/UserContext";

// Components
import Menu from "../Menu";

const Profile = () => {
    const { user } = useContext(AuthContext);

    const [menuState, setMenuState] = useState(false);

    const showMenu = () => {
        setMenuState(!menuState);
    };

    return (
        <div
            className="relative gap-2 cursor-pointer sm:flex sm:items-center"
            onClick={showMenu}
        >
            <div className="flex items-center gap-2 p-1 rounded-full hover:bg-gray-700 opacity-70 hover:opacity-100">
                <div className="w-8 h-8 overflow-hidden rounded-full">
                    <img
                        className="bg-cover"
                        src={`https://scontent.falg3-2.fna.fbcdn.net/v/t1.0-9/84527914_786980351814087_342786588343795712_o.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeF0_NbzRphzi2c9emlKP5TygDs1tC393ISAOzW0Lf3chAQN6lnvYCxoevxv0IWZ_V5io3rVxMvdBoTcQR6_Fjfk&_nc_ohc=P3lVaNADnd8AX-TlYtH&_nc_ht=scontent.falg3-2.fna&oh=76e3cf96399e7199b2fbaff846fabf67&oe=60033BCF`}
                    />
                </div>
                <div className="hidden sm:block">
                    <span className="tracking-wider ">{user.slayerID}</span>
                </div>
            </div>
            {menuState && <Menu />}
        </div>
    );
};

export default Profile;
