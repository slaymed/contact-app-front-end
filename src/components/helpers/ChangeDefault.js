import React, { useContext } from "react";
import { useMutation } from "@apollo/react-hooks";

// Context
import { ContactContext } from "../../Context/ContactGalleryContext";
import { AlertContext } from "../../Context/SweetAlertContext";

// Icons
import { IoCheckmarkDoneOutline } from "react-icons/io5";

// Components
import NumberButton from "./Buttons/NumberButton";
import Tooltip from "./Tooltip";

// GraphQL
import { CHANGE_DEFAULT_NUMBER } from "../../util/GraphQL";

const ChangeDefault = ({ mobile }) => {
    const { contextContact, setContextContact } = useContext(ContactContext);
    const { showAlert } = useContext(AlertContext);

    const [changeDefaultNumber] = useMutation(CHANGE_DEFAULT_NUMBER, {
        update: (
            _,
            {
                data: {
                    changeDefaultNumber: { contact, message },
                },
            }
        ) => {
            setContextContact(contact);
            showAlert(message);
        },
        onError(err) {
            console.log(err.graphQLErrors[0].message);
        },
    });

    return (
        <NumberButton
            onClick={() =>
                changeDefaultNumber({
                    variables: {
                        contactID: contextContact.id,
                        mobile,
                    },
                })
            }
        >
            <IoCheckmarkDoneOutline style={{ color: "#2ECC71" }} />
            <Tooltip top={true}>Set Default</Tooltip>
        </NumberButton>
    );
};

export default ChangeDefault;
