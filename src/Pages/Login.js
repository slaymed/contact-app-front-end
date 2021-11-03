import React, { useContext, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN_USER } from "../util/GraphQL";
import { MdSecurity } from "react-icons/md";

// Context
import { AuthContext } from "../Context/UserContext";

// Components
import RegistedUser from "../components/helpers/RegistedUser";

const Login = () => {
    document.title = "Login";

    const { login } = useContext(AuthContext);

    const [registedUsers, setRegistedUsers] = useState(
        JSON.parse(localStorage.getItem("REGISTED__USER")) || []
    );

    const initialState = {
        slayerID: "",
        password: "",
    };

    const [errors, setErrors] = useState({});

    const [values, setValues] = useState(initialState);

    const passwordInput = useRef(null);

    const history = useHistory();

    const [loginUser, { loading }] = useMutation(LOGIN_USER, {
        update: (_, { data: { login: userData } }) => {
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
        loginUser();
    };

    const fastLogin = (slayerID) => {
        setValues({
            ...values,
            slayerID,
            password: "",
        });
        passwordInput.current.focus();
        setErrors({});
    };

    return (
        <div className="flex items-center justify-center w-screen h-screen dark:bg-gray-900">
            <div className="flex flex-col gap-2 p-2 sm:items-start sm:flex-row">
                {registedUsers && registedUsers.length > 0 && (
                    <div className="flex flex-col gap-2 p-3 overflow-auto rounded max-h-64 scroll-bar sm:self-start dark:bg-gray-800 w-72 dark:text-gray-200">
                        <div>
                            <p className="p-2 text-center text-md">
                                Welcome Back
                            </p>
                        </div>
                        {registedUsers.map((slayerID) => (
                            <RegistedUser
                                key={slayerID}
                                fastLogin={fastLogin}
                                setRegistedUsers={setRegistedUsers}
                                slayerID={slayerID}
                            />
                        ))}
                    </div>
                )}

                <div className="flex flex-col flex-auto gap-2 px-8 py-2 rounded sm:self-end dark:bg-gray-800 dark:text-gray-200">
                    <div className="flex flex-col items-center gap-2 p-2">
                        <p className="tracking-wide text-center text-md">
                            Login Form
                        </p>
                        <MdSecurity />
                    </div>
                    <form
                        noValidate
                        onSubmit={handleSubmit}
                        autoComplete="off"
                        className="flex flex-col gap-2"
                    >
                        <input
                            type="text"
                            className={`p-2 text-sm bg-transparent border-2 rounded  ${
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
                            <p className="text-xs text-red-400 ">
                                {errors.slayerID}
                            </p>
                        )}
                        <input
                            className={`p-2  text-sm bg-transparent border-2 rounded  ${
                                errors.password
                                    ? "border-red-400 placeholder-red-400"
                                    : "dark:border-gray-700"
                            }`}
                            type="password"
                            name="password"
                            placeholder="Password"
                            ref={passwordInput}
                            onChange={handleChange}
                            value={values.password}
                        />
                        {errors.password && (
                            <p className="text-xs text-red-400 ">
                                {errors.password}
                            </p>
                        )}
                        {errors.general && (
                            <p className="p-1 text-sm text-center text-red-400">
                                {errors.general}
                            </p>
                        )}

                        <div className="flex justify-center p-1">
                            <button className="text-blue-400" type="submit">
                                Sign in
                            </button>
                        </div>

                        {!loading && (
                            <p className="pb-1 text-sm text-center">
                                Don't have an account ?{" "}
                                <Link to="/register" className="text-blue-400">
                                    Register
                                </Link>
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
