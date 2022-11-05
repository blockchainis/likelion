const { createContext } = require('react');
import { useContext } from 'react';

export const AuthContext = createContext("");
function useAuth() {
    return useContext(AuthContext);
}

export default useAuth;