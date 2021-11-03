import React from "react";

import { BrowserRouter as Router, Switch } from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

// Context
import { AuthProvider } from "./Context/UserContext";
import { ContactProvider } from "./Context/ContactGalleryContext";
import { FilterProvider } from "./Context/FilterContext";
import { AlertProvider } from "./Context/SweetAlertContext";
import { EditContactProvider } from "./Context/EditContactContext";

// Routes
import AuthRoute from "./util/AuthRoute";

import "./tailwind.output.css";
import "./tailwind.css";

const App = () => {
    return (
        <AlertProvider>
            <AuthProvider>
                <FilterProvider>
                    <ContactProvider>
                        <EditContactProvider>
                            <Router>
                                <Switch>
                                    <AuthRoute
                                        exact
                                        path="/"
                                        component={Home}
                                        authenticated
                                    />
                                    <AuthRoute
                                        exact
                                        path="/login"
                                        component={Login}
                                        guest
                                    />
                                    <AuthRoute
                                        exact
                                        path="/register"
                                        component={Register}
                                        guest
                                    />
                                </Switch>
                            </Router>
                        </EditContactProvider>
                    </ContactProvider>
                </FilterProvider>
            </AuthProvider>
        </AlertProvider>
    );
};

export default App;
