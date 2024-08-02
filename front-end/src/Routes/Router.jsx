import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import HomePage from "../Pages/HomePage/HomePage";
import Sign from '../Pages/SignUp/Sign';
import Login from '../Pages/Login/Login';
import EmailVarification from "../Pages/Email/EmailVarification";
import VerificationSuccess from "../Pages/Email/VerificationSuccess";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            
        ]
    },
    {
        path: '/sign-up',
        element: <Sign />
    },
    {
        path: '/sign-in',
        element: <Login />
    },
    {
        path: "/verify-your-email",
        element: <EmailVarification />,
      },
      {
        path: "/verified-email/:token",
        element: <VerificationSuccess />,
      },
]);


export default router;