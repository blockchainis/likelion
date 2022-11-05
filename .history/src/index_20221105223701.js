import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import {AuthProvider} from "./context/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <React.StrictMode>
        <AuthProvider>
            <App/>
        </AuthProvider>
        <ToastContainer theme="dark"/>
    </React.StrictMode>

);
