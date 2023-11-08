import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(null);
  const [passwordIsValid, setPasswordIsValid] = useState(null);
  const [loginClicked, setLoginClicked] = useState(false);

  useEffect(() => {
    setEmailIsValid(email.includes('@'));
    setPasswordIsValid(password.length >= 6);
  }, [email, password]);

  const handleLogin = (event) => {
    event.preventDefault(); 
    setLoginClicked(true);

    if (emailIsValid && passwordIsValid) {
      navigate('/logo');
    }
  };

  return (
    <div className='bg-violet-400'>
      <nav className="bg-violet-500 p-2 text-violet-100">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-xl font-semibold">&copy; AltaSierra</p>
        </div>
      </nav>
      <main>
        <div className="flex justify-center items-center h-screen">
          <form className="bg-violet-300 p-20 rounded-lg shadow-lg" onSubmit={handleLogin}>
            <div className={`relative mb-4 ${emailIsValid === false ? 'text-red-500' : ''}`}>
              <label htmlFor="email" className="leading-7 text-sm text-violet-600">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-violet-200 rounded border border-gray-300 focus:border-violet-500 focus:ring-1 focus:ring-violet-600 text-base outline-none text-violet-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="password" className="leading-7 text-sm text-violet-600">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full bg-violet-200 rounded border border-gray-300 focus:border-violet-500 focus:ring-1 focus:ring-violet-600 text-base outline-none text-violet-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                  (!passwordIsValid && loginClicked) ? 'border-red-500' : ''
                }`}
              />
              {(!passwordIsValid && loginClicked) ? (
                <div className="text-xs text-red-500">Password must be at least 6 characters long</div>
              ) : null}
            </div>
            <button className="bg-violet-500 text-white py-2 px-4 rounded" type="submit">
              Login
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
