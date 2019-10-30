import React, { createContext, useReducer } from 'react';
import jwtDecode from 'jwt-decode';
import { useQuery } from '@apollo/react-hooks';
import { LOGGED_IN_USER } from '../GraphQL/Queries/User';

const initialState = {
  user: null,
  me: null,
};

const tokenTitle = 'wibJwtToken';

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
  const { loading, client, data } = useQuery(LOGGED_IN_USER);

  if (loading) return <p>Loading...</p>;
  if (data) {
    initialState.me = data.me;
  }

  function login(userData) {
    localStorage.setItem(tokenTitle, userData.token);
    dispatch({
      type: 'LOGIN',
      payload: userData,
    });
  }
  function logout() {
    localStorage.removeItem(tokenTitle);
    client.resetStore();
    dispatch({
      type: 'LOGOUT',
    });
  }
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <AuthContext.Provider value={{ user: state.user, me: state.me, login, logout }} {...props} />
  );
}

export { AuthContext, AuthProvider, tokenTitle };
