const { createContext } = require('react');

//어드레스 키가 문자열에 있으면 로그인을 한 것, 없으면 지갑 연동이 안되어있는 것.
export const AuthContext = createContext("");
