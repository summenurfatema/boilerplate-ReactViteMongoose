import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import { store } from "./redux/app/store.js";
import router from './Routes/Router';
import UserContext from './Context/UserContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <UserContext>
    <RouterProvider router={router} />
    </UserContext>
    </Provider>
  </React.StrictMode>,
)
