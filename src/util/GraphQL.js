import gql from "graphql-tag";

export const GET_CONTACTS_QUERY = gql`
    {
        getContacts {
            id
            slayerID
            firstName
            middleName
            lastName
            location {
                contry
                streetAddress
                streetAddressTwo
                postCode
                city
            }
            birthday {
                day
                month
                year
            }
            nickName

            company
            itsFavorite
            itsFamilly
            email
            createdAt
            editedAt

            numbers {
                id
                mobile
                isDefault
                numberType
            }
            homeNumbers {
                id
                home
                numberType
            }

            website
            relationShip
        }
    }
`;

export const DELETE_CONTACT = gql`
    mutation deleteContact($contactID: ID!) {
        deleteContact(contactID: $contactID) {
            message
        }
    }
`;

export const LOGIN_USER = gql`
    mutation login($slayerID: String!, $password: String!) {
        login(slayerID: $slayerID, password: $password) {
            id
            email
            slayerID
            createdAt
            token
        }
    }
`;

export const CREATE_CONTACT_MUTATION = gql`
    mutation createContact(
        $firstName: String
        $middleName: String
        $lastName: String
        $itsFamilly: Boolean!
        $itsFavorite: Boolean!
        $isDefault: Boolean!
        $contry: String
        $streetAddress: String
        $streetAddressTwo: String
        $postCode: String
        $city: String
        $day: String
        $month: String
        $year: String
        $nickName: String
        $company: String
        $email: String
        $mobile: String!
        $home: String
        $website: String
        $relationShip: String
    ) {
        createContact(
            contactInput: {
                firstName: $firstName
                middleName: $middleName
                lastName: $lastName
                itsFamilly: $itsFamilly
                itsFavorite: $itsFavorite
                isDefault: $isDefault
                contry: $contry
                streetAddress: $streetAddress
                streetAddressTwo: $streetAddressTwo
                postCode: $postCode
                city: $city
                day: $day
                month: $month
                year: $year
                nickName: $nickName
                company: $company
                email: $email
                mobile: $mobile
                home: $home
                website: $website
                relationShip: $relationShip
            }
        ) {
            message
            contact {
                id
                slayerID
                firstName
                middleName
                lastName
                location {
                    contry
                    streetAddress
                    streetAddressTwo
                    postCode
                    city
                }
                birthday {
                    day
                    month
                    year
                }
                nickName
                company
                itsFavorite
                itsFamilly
                email
                createdAt
                editedAt
                numbers {
                    id
                    mobile
                    isDefault
                    numberType
                }
                homeNumbers {
                    id
                    home
                    numberType
                }
                website
                relationShip
            }
        }
    }
`;
export const REGISTER_USER = gql`
    mutation register(
        $slayerID: String!
        $email: String!
        $password: String!
        $confirmPassword: String!
    ) {
        register(
            registerInput: {
                slayerID: $slayerID
                email: $email
                password: $password
                confirmPassword: $confirmPassword
            }
        ) {
            token
        }
    }
`;

export const TOGGLE_FAVORITE = gql`
    mutation toggleFavorite($contactID: ID!) {
        toggleFavorite(contactID: $contactID) {
            message
            contact {
                id
                slayerID
                firstName
                middleName
                lastName
                location {
                    contry
                    streetAddress
                    streetAddressTwo
                    postCode
                    city
                }
                birthday {
                    day
                    month
                    year
                }
                nickName
                company
                itsFavorite
                itsFamilly
                email
                createdAt
                editedAt
                numbers {
                    id
                    mobile
                    isDefault
                    numberType
                }
                homeNumbers {
                    id
                    home
                    numberType
                }
                website
                relationShip
            }
        }
    }
`;
export const TOGGLE_FAMILLY = gql`
    mutation toggleFamilly($contactID: ID!) {
        toggleFamilly(contactID: $contactID) {
            message
            contact {
                id
                slayerID
                firstName
                middleName
                lastName
                location {
                    contry
                    streetAddress
                    streetAddressTwo
                    postCode
                    city
                }
                birthday {
                    day
                    month
                    year
                }
                nickName
                company
                itsFavorite
                itsFamilly
                email
                createdAt
                editedAt
                numbers {
                    id
                    mobile
                    isDefault
                    numberType
                }
                homeNumbers {
                    id
                    home
                    numberType
                }
                website
                relationShip
            }
        }
    }
`;

export const ADD_MOBILE_TO_CONTACT = gql`
    mutation addMobileToContact(
        $contactID: ID!
        $mobile: String!
        $isDefault: Boolean!
    ) {
        addMobileToContact(
            contactID: $contactID
            mobile: $mobile
            isDefault: $isDefault
        ) {
            message
            contact {
                id
                slayerID
                firstName
                middleName
                lastName
                location {
                    contry
                    streetAddress
                    streetAddressTwo
                    postCode
                    city
                }
                birthday {
                    day
                    month
                    year
                }
                nickName
                company
                itsFavorite
                itsFamilly
                email
                createdAt
                editedAt
                numbers {
                    id
                    mobile
                    isDefault
                    numberType
                }
                homeNumbers {
                    id
                    home
                    numberType
                }
                website
                relationShip
            }
        }
    }
`;

export const CHANGE_DEFAULT_NUMBER = gql`
    mutation changeDefaultNumber($contactID: ID!, $mobile: String!) {
        changeDefaultNumber(contactID: $contactID, mobile: $mobile) {
            message
            contact {
                id
                slayerID
                firstName
                middleName
                lastName
                location {
                    contry
                    streetAddress
                    streetAddressTwo
                    postCode
                    city
                }
                birthday {
                    day
                    month
                    year
                }
                nickName
                company
                itsFavorite
                itsFamilly
                email
                createdAt
                editedAt
                numbers {
                    id
                    mobile
                    isDefault
                    numberType
                }
                homeNumbers {
                    id
                    home
                    numberType
                }
                website
                relationShip
            }
        }
    }
`;

export const ADD_HOME_TO_CONTACT = gql`
    mutation addHomeToContact($contactID: ID!, $home: String!) {
        addHomeToContact(contactID: $contactID, home: $home) {
            message
            contact {
                id
                slayerID
                firstName
                middleName
                lastName
                location {
                    contry
                    streetAddress
                    streetAddressTwo
                    postCode
                    city
                }
                birthday {
                    day
                    month
                    year
                }
                nickName
                company
                itsFavorite
                itsFamilly
                email
                createdAt
                editedAt
                numbers {
                    id
                    mobile
                    isDefault
                    numberType
                }
                homeNumbers {
                    id
                    home
                    numberType
                }
                website
                relationShip
            }
        }
    }
`;

export const DELETE_MOBILE_FROM_CONTACT = gql`
    mutation deleteMobileFromContact($contactID: ID!, $mobile: String!) {
        deleteMobileFromContact(contactID: $contactID, mobile: $mobile) {
            message
            contact {
                id
                slayerID
                firstName
                middleName
                lastName
                location {
                    contry
                    streetAddress
                    streetAddressTwo
                    postCode
                    city
                }
                birthday {
                    day
                    month
                    year
                }
                nickName
                company
                itsFavorite
                itsFamilly
                email
                createdAt
                editedAt
                numbers {
                    id
                    mobile
                    isDefault
                    numberType
                }
                homeNumbers {
                    id
                    home
                    numberType
                }
                website
                relationShip
            }
        }
    }
`;
export const DELETE_HOME_FROM_CONTACT = gql`
    mutation deleteHomeFromContact($contactID: ID!, $home: String!) {
        deleteHomeFromContact(contactID: $contactID, home: $home) {
            message
            contact {
                id
                slayerID
                firstName
                middleName
                lastName
                location {
                    contry
                    streetAddress
                    streetAddressTwo
                    postCode
                    city
                }
                birthday {
                    day
                    month
                    year
                }
                nickName
                company
                itsFavorite
                itsFamilly
                email
                createdAt
                editedAt
                numbers {
                    id
                    mobile
                    isDefault
                    numberType
                }
                homeNumbers {
                    id
                    home
                    numberType
                }
                website
                relationShip
            }
        }
    }
`;

export const EDIT_CONTACT_INFO = gql`
    mutation editContactInfo(
        $contactID: ID!
        $firstName: String!
        $middleName: String!
        $lastName: String!
        $nickName: String!
        $contry: String!
        $streetAddress: String!
        $streetAddressTwo: String!
        $postCode: String!
        $city: String!
        $day: String!
        $month: String!
        $year: String!
        $company: String!
        $email: String!
        $website: String!
        $relationShip: String!
    ) {
        editContactInfo(
            contactID: $contactID
            firstName: $firstName
            middleName: $middleName
            lastName: $lastName
            nickName: $nickName
            contry: $contry
            streetAddress: $streetAddress
            streetAddressTwo: $streetAddressTwo
            postCode: $postCode
            city: $city
            day: $day
            month: $month
            year: $year
            company: $company
            email: $email
            website: $website
            relationShip: $relationShip
        ) {
            message
            contact {
                id
                slayerID
                firstName
                middleName
                lastName
                location {
                    contry
                    streetAddress
                    streetAddressTwo
                    postCode
                    city
                }
                birthday {
                    day
                    month
                    year
                }
                nickName
                company
                itsFavorite
                itsFamilly
                email
                createdAt
                editedAt
                numbers {
                    id
                    mobile
                    isDefault
                    numberType
                }
                homeNumbers {
                    id
                    home
                    numberType
                }
                website
                relationShip
            }
        }
    }
`;
