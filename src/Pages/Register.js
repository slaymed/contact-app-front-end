import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { MdSecurity } from "react-icons/md";

// Context
import { AuthContext } from "../Context/UserContext";

// GraphQL
import { REGISTER_USER } from "../util/GraphQL";

const Register = () => {
    const { login } = useContext(AuthContext);

    const initialState = {
        slayerID: "",
        email: "",
        password: "",
        confirmPassword: "",
    };

    const history = useHistory();

    const [errors, setErrors] = useState({});
    const [values, setValues] = useState(initialState);

    const [addUser, { loading }] = useMutation(REGISTER_USER, {
        update: (_, { data: { register: userData } }) => {
            login(userData);
            history.push("/");
        },
        onError(err) {
            setErrors(err.graphQLErrors[0].extensions.errors);
        },
        variables: values,
    });

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
        setErrors({ ...errors, [event.target.name]: "" });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.removeItem("JWTTOKEN");
        addUser();
    };

    return (
        <div className="flex items-center justify-center w-screen h-screen dark:bg-gray-900">
            <div className="flex flex-col w-full max-w-sm gap-2 px-4 py-2 mx-4 rounded dark:bg-gray-800 dark:text-gray-200">
                <div className="flex flex-col items-center gap-2 p-2">
                    <p className="tracking-wide text-center text-md">
                        Register Form
                    </p>
                    <MdSecurity />
                </div>
                <form
                    noValidate
                    onSubmit={handleSubmit}
                    autoComplete="off"
                    className="flex flex-col gap-2 "
                >
                    <input
                        type="text"
                        className={`p-2 px-2 text-sm bg-transparent border-2 rounded  ${
                            errors.slayerID
                                ? "border-red-400 placeholder-red-400"
                                : "dark:border-gray-700"
                        }`}
                        name="slayerID"
                        placeholder="Slayer ID"
                        onChange={handleChange}
                        value={values.slayerID}
                    />
                    {errors.slayerID && (
                        <p className="px-2 text-xs text-red-400">
                            {errors.slayerID}
                        </p>
                    )}
                    <input
                        type="text"
                        className={`p-2 text-sm bg-transparent border-2 rounded  ${
                            errors.email
                                ? "border-red-400 placeholder-red-400"
                                : "dark:border-gray-700"
                        }`}
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        value={values.email}
                    />
                    {errors.email && (
                        <p className="px-2 text-xs text-red-400">
                            {errors.email}
                        </p>
                    )}

                    <input
                        className={`p-2 text-sm bg-transparent border-2 rounded  ${
                            errors.password
                                ? "border-red-400 placeholder-red-400"
                                : "dark:border-gray-700"
                        }`}
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        value={values.password}
                    />
                    {errors.password && (
                        <p className="px-2 text-xs text-red-400">
                            {errors.password}
                        </p>
                    )}

                    <input
                        type="password"
                        className={`p-2 text-sm bg-transparent border-2 rounded  ${
                            errors.confirmPassword
                                ? "border-red-400 placeholder-red-400"
                                : "dark:border-gray-700"
                        }`}
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        onChange={handleChange}
                        value={values.confirmPassword}
                    />
                    {errors.confirmPassword && (
                        <p className="text-xs text-red-400">
                            {errors.confirmPassword}
                        </p>
                    )}
                    {errors.general && (
                        <p className="p-1 text-sm text-center text-red-400">
                            {errors.general}
                        </p>
                    )}

                    <div className="flex justify-center p-1">
                        <button className="text-blue-400" type="submit">
                            Sign Up
                        </button>
                    </div>

                    {!loading && (
                        <p className="pb-1 text-sm text-center">
                            Already Slayer ?{" "}
                            <Link to="/" className="text-blue-400">
                                Login
                            </Link>
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Register;
