import React, { createContext, useReducer } from 'react';
import jwtDecode from 'jwt-decode';

const initialState = {
  user: null,
};

const tokenTitle = 'jwtToken';

if (localStorage.getItem(tokenTitle)) {
  const decodedToken = jwtDecode(localStorage.getItem(tokenTitle));

  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem(tokenTitle);
  } else {
    initialState.user = decodedToken;
  }
}

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
});

function authReducer(state, action) {
  switch (action.type) {
    case 'LOGIN': {
      return {
        ...state,
        user: action.payload,
      };
    }
    case 'LOGOUT': {
      return {
        ...state,
        user: null,
      };
    }
    default:
      return state;
  }
}

function AuthProvider(props) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  function login(userData) {
    localStorage.setItem(tokenTitle, userData.token);
    dispatch({
      type: 'LOGIN',
      payload: userData,
    });
  }
  function logout() {
    localStorage.removeItem(tokenTitle);
    dispatch({
      type: 'LOGOUT',
    });
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <AuthContext.Provider value={{ user: state.user, login, logout }} {...props} />;
}

export { AuthContext, AuthProvider };
