import React, { useContext } from "react";

// Components
import ContactsPage from "../components/ContactsPage";
import ContactGallery from "../components/ContactGallery";
import Nav from "../components/Nav";
import SideBar from "../components/SideBar/Index";
import EditContact from "../components/ContactsPage/Contact/EditContact";
import Overlay from "../components/helpers/Overlay";
import SweetAlert from "../components/helpers/SweetAlert";

// Context
import { EditContactContext } from "../Context/EditContactContext";

const Home = () => {
    document.title = "Home";

    const { formOpened, closeForm } = useContext(EditContactContext);

    return (
        <div className="flex flex-col h-screen max-h-screen p-3 text-gray-700 bg-gray-200 dark:bg-gray-900 dark:text-gray-100">
            <Nav />
            <div className="grid flex-1 grid-flow-row-dense grid-cols-12 grid-rows-6 gap-3 rounded">
                <SideBar />
                <ContactsPage />
                <div className="hidden row-span-6 bg-gray-100 rounded shadow dark:bg-gray-800 sm:block sm:col-span-6 lg:col-span-4 2xl:col-span-3">
                    <ContactGallery />
                </div>
            </div>
            {formOpened && (
                <div>
                    <Overlay onClick={closeForm} />
                    <EditContact />
                </div>
            )}
            <SweetAlert />
        </div>
    );
};

export default Home;
