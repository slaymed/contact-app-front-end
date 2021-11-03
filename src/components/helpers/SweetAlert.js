import React, { useContext, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

// Styles
import "react-toastify/dist/ReactToastify.css";

// Context
import { AlertContext } from "../../Context/SweetAlertContext";

const SweetAlert = () => {
    const { opened, message } = useContext(AlertContext);

    useEffect(() => {
        if (opened && message) {
            toast(message);
        }
    }, [opened, message]);

    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeButton={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default SweetAlert;
