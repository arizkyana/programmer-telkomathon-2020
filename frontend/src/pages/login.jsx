import { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const payload = {
      username,
      password
    };

    const request = await axios({
      url: '/login',
      method: 'post',
      data: payload,
    });

    localStorage.setItem('token', request.data.token);

    // window.location.href = '/'
  };

  return (
    <div>
      <form onChange={handleLogin}>
        <input name="username" onChange={(e) => setUsername(e.target.value)} />
        <input name="password" type="password" onChange={(e) => setPassword(e.target.value)} />
        <button>Login</button>
      </form>
    </div>
  )
}

export default LoginPage;
