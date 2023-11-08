import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './../altasierralogo.png';

const LogoPage = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <div className="bg-violet-300 flex flex-col min-h-screen">
            {/* Navbar */}
            <nav className="bg-violet-500 p-2 text-violet-100">
                <div className="container mx-auto flex items-center justify-between">
                    <p className="text-xl font-semibold">&copy; AltaSierra</p>
                    <button
                        className="bg-violet-700 hover:bg-violet-800 text-violet-100 text-sm font-bold rounded px-3 py-2"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            </nav>

            {/* Main content */}
            <main className="flex flex-col items-center justify-center flex-1">
                <img src={Logo} alt="Logo" className="w-40 h-40" />

            </main>
        </div>
    );
};

export default LogoPage;
