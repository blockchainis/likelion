import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import AuthService from './service/auth_service';
import AuthProvider from "./context/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const authService = new AuthService();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <React.StrictMode>
        <AuthProvider><App authService = {authService} /></AuthProvider>
    </React.StrictMode>

);

