import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Verifica se há um token (ou usuário) no localStorage
        const user = localStorage.getItem('user');
        setIsAuthenticated(!!user);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        setIsAuthenticated(false);
        window.location.href = '/'; // redireciona para Home
    };

    const menuLinks = (
        <>
            <a href="/" className="text-white hover:text-green-100 transition-colors duration-300 text-lg font-medium">Home</a>
            <a href="/about" className="text-white hover:text-green-100 transition-colors duration-300 text-lg font-medium">Sobre</a>
            <a href="/service" className="text-white hover:text-green-100 transition-colors duration-300 text-lg font-medium">Serviços</a>
            <a href="/contact" className="text-white hover:text-green-100 transition-colors duration-300 text-lg font-medium">Contato</a>
            {isAuthenticated ? (
                <>
                    <a href="/profile" className="text-white hover:text-green-100 transition-colors duration-300 text-lg font-medium">Perfil</a>
                    <button onClick={handleLogout} className="text-white hover:text-green-100 transition-colors duration-300 text-lg font-medium">Sair</button>
                </>
            ) : (
                <a href="/login" className="text-white hover:text-green-100 transition-colors duration-300 text-lg font-medium">Login</a>
            )}
        </>
    );

    return (
        <nav className=" w-full bg-gradient-to-r from-lime-200 to-lime-600 text-black py-2 px-3 shadow-1g">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-lime-600 text-2xl font-bold">
                    <a href="/">Serra Lima</a>
                </div>
                <div className="hidden md:flex space-x-4">
                    {menuLinks}
                </div>
                {/* Botão do Menu para mobile */}
                <button
                    className="md:hidden text-white"
                    onClick={toggleMenu}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            {/* Menu Dropdown para mobile */}
            {isMenuOpen && (
                <div className="md:hidden bg-lime-500 p-4 space-y-4">
                    {menuLinks}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
