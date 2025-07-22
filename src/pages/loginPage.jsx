import React from "react";
import Footer from "../components/footer";        // Importa o componente Footer (rodapé)
import Navbar from "../components/navbar";        // Importa o componente Navbar (barra de navegação)
import bglogin from "../assets/imagens/bglogin.jpg";  // Importa a imagem de fundo para a página de login
import LoginForm from "../components/loginForm";  // Importa o componente do formulário de login

const LoginPage = () => {
    return (
        <>
            {/* Container principal que organiza a página em coluna e ocupa a altura mínima da tela */}
            <div className="flex flex-col min-h-screen">
                
                {/* Barra de navegação no topo da página */}
                <Navbar />
                
                {/* Container central com a imagem de fundo e o formulário de login */}
                <div
                    className="relative bg-bg-cover h-[900px] bg-center flex-grow flex items-center justify-center"
                    style={{ backgroundImage: `url('${bglogin}')` }} // Define a imagem de fundo dinamicamente
                >
                    {/* Exibe o formulário de login centralizado */}
                    <LoginForm />
                </div>
                
                {/* Rodapé da página */}
                <Footer />
            </div>
        </>
    )
}

export default LoginPage;
