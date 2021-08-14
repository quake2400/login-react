import React, { useContext } from 'react';
import { AuthContext } from '../../context/authContext/AuthContext';
import { logout } from '../../context/authContext/AuthActions';

export default function Home() {
  const { dispatch } = useContext(AuthContext);
  return (
    <h1>
      Hola soy Home ||{' '}
      <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </h1>
  );
}
