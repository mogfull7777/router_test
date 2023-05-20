import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Main from "./component/Main";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import ChangePassword from "./pages/ChangePassword";
import Profile from "./pages/profile";
import FindEmail from "./pages/FindEmail";
import SandCode from "./pages/SandCode";

const Router = createBrowserRouter([
    {
        path : '/',
        element : <Main />
    },
    {
        path : '/login',
        element : <Login />
    },
    {
        path : '/signup',
        element : <SignUp />
    },
    {
        path : '/forgot/password',
        element : <ForgotPassword />
    },
    {
        path : '/change/password:tokenId',
        element : <ChangePassword />
    },
    {
        path : '/profile',
        element : <Profile />
    },
    {
        path : '/find/email',
        element : <FindEmail />
    },
    {
        path : '/sand/code',
        element : <SandCode />
    }
])

export default Router;