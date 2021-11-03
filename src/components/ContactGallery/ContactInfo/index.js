import React, { useContext } from "react";

// Context
import { ContactContext } from "../../../Context/ContactGalleryContext";

// Components
import HomeNumbers from "./HomeNumbers";
import MobileNumbers from "./MobileNumbers";
import ContactLocation from "./ContactLocation";
import Birthday from "./Birthday";
import RestInfo from "./RestInfo";
import ContactDate from "./ContactDate";

const ContactInfo = () => {
    const { contextContact } = useContext(ContactContext);

    return (
        <div className="h-full overflow-auto scroll-bar">
            <div className="flex flex-col justify-between h-full gap-3 ">
                <div className="flex flex-col flex-auto gap-3 ">
                    <MobileNumbers />
                    <HomeNumbers />

                    {contextContact.location.contry ||
                    contextContact.location.streetAdrress ||
                    contextContact.location.streetAdrressTwo ||
                    contextContact.location.postCode ||
                    contextContact.location.city ? (
                        <ContactLocation location={contextContact.location} />
                    ) : (
                        ""
                    )}

                    {contextContact.birthday.year && (
                        <Birthday birthday={contextContact.birthday} />
                    )}

                    {contextContact.nickName.trim() !== "" ||
                    contextContact.email.trim() !== "" ||
                    contextContact.relationShip.trim() !== "" ||
                    contextContact.website.trim() !== "" ||
                    contextContact.company.trim() !== "" ? (
                        <RestInfo />
                    ) : (
                        ""
                    )}
                </div>
                <div>
                    {contextContact.createdAt || contextContact.updatedAt ? (
                        <ContactDate />
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
