import React from 'react';
import './Login.scss';

function Login() {
  return (
    <div className='container'>
      <input type='text' placeholder="User Name" />
      <input type='password' placeholder="Password" />
      <button>Login</button>
    </div>

  );
}

export default Login;