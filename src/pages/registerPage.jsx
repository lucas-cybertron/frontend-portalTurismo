import React from "react";
import Footer from "../components/footer";          // Importa o componente Footer (rodapé)
import Navbar from "../components/navbar";          // Importa o componente Navbar (barra de navegação)
import bgregister from "../assets/imagens/bgregister.jpg";  // Importa a imagem de fundo para a página de registro
import RegisterForm from "../components/registerForm";      // Importa o formulário de cadastro

const RegisterPage = () =>  {
    return (
        <>
            {/* Container principal que organiza a página em coluna e ocupa a altura mínima da tela */}
            <div className="flex flex-col min-h-screen">
                {/* Navbar fixa no topo */}
                <Navbar/>

                {/* Área principal da página com imagem de fundo e formulário centralizado */}
                <div
                    className="flex h-[1000px] m-0.5 bg-cover bg-center items-center justify-center"
                    style={{ backgroundImage: `url('${bgregister}')` }} // Define a imagem de fundo dinâmica
                >
                    {/* Formulário de registro centralizado */}
                   <RegisterForm/>
                </div>

                {/* Rodapé da página */}
                <Footer />
            </div>
        </>
    )
}

export default RegisterPage;
