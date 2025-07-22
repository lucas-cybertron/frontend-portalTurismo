import React, { useState, useEffect } from 'react';

const Navbar = () => {
    // Estado para controlar se o menu mobile está aberto
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // Estado para controlar se o usuário está autenticado (logado)
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Checa localStorage para ver se existe usuário/token salvo (autenticação simples)
        const user = localStorage.getItem('user');
        setIsAuthenticated(!!user); // true se user existir, false caso contrário
    }, []);

    // Função para abrir/fechar menu mobile
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Função para logout
    const handleLogout = () => {
        localStorage.removeItem('user'); // Remove dados de login
        setIsAuthenticated(false); // Atualiza estado
        window.location.href = '/'; // Redireciona para home (pode usar navigate se usar react-router)
    };

    // Links do menu que aparecem tanto no desktop quanto no mobile
    const menuLinks = (
        <>
            <a href="/" className="text-white hover:text-green-100 transition-colors duration-300 text-lg font-medium">Home</a>
            <a href="/about" className="text-white hover:text-green-100 transition-colors duration-300 text-lg font-medium">Sobre</a>
            <a href="/service" className="text-white hover:text-green-100 transition-colors duration-300 text-lg font-medium">Serviços</a>
            <a href="/contact" className="text-white hover:text-green-100 transition-colors duration-300 text-lg font-medium">Contato</a>

            {isAuthenticated ? (
                <>
                    <a href="/profile" className="text-white hover:text-green-100 transition-colors duration-300 text-lg font-medium">Perfil</a>
                    <button 
                        onClick={handleLogout} 
                        className="text-white hover:text-green-100 transition-colors duration-300 text-lg font-medium"
                    >
                        Sair
                    </button>
                </>
            ) : (
                <a href="/login" className="text-white hover:text-green-100 transition-colors duration-300 text-lg font-medium">Login</a>
            )}
        </>
    );

    return (
        <nav className="w-full bg-gradient-to-r from-lime-200 to-lime-600 text-black py-2 px-3 shadow-lg">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo do site */}
                <div className="text-lime-600 text-2xl font-bold">
                    <a href="/">Serra Lima</a>
                </div>

                {/* Menu desktop (escondido em telas menores que md) */}
                <div className="hidden md:flex space-x-4">
                    {menuLinks}
                </div>

                {/* Botão para abrir menu mobile (aparece somente em telas menores que md) */}
                <button
                    className="md:hidden text-white"
                    onClick={toggleMenu}
                    aria-label="Abrir menu"
                >
                    {/* Ícone hambúrguer */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Menu dropdown mobile */}
            {isMenuOpen && (
                <div className="md:hidden bg-lime-500 p-4 space-y-4">
                    {menuLinks}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
