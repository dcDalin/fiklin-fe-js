import React, { createContext, useReducer } from 'react';

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
  const [state, dispatch] = useReducer(authReducer, { user: null });

  function login(userData) {
    dispatch({
      type: 'LOGIN',
      payload: userData,
    });
  }
  function logout() {
    dispatch({
      type: 'LOGOUT',
    });
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <AuthContext.Provider value={{ user: state.user, login, logout }} {...props} />;
}

export { AuthContext, AuthProvider };
