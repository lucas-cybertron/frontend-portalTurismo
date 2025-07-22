import React from "react";
import Footer from "../components/footer";        // Importa o componente Footer
import Navbar from "../components/navbar";        // Importa o componente Navbar
import CardAbout from "../components/cardAbout";  // Importa o componente CardAbout
import bgAbout from "../assets/imagens/bgAbout.jpg"; // Importa a imagem de background

const AboutPage = () => {
    return (
        <>
            {/* Container principal com flexbox em coluna e altura mínima de 100vh */}
            <div className="flex flex-col min-h-screen">
                
                {/* Barra de navegação no topo da página */}
                <Navbar />

                {/* Container com background de imagem cobrindo toda a área mínima da tela */}
                <div 
                    className="relative min-h-screen bg-cover bg-center"
                    style={{ backgroundImage: `url(${bgAbout})` }} // Define a imagem de fundo dinamicamente
                >
                    {/* Componente CardAbout que pode conter informações sobre a página */}
                    <CardAbout img={bgAbout} />
                </div>

                {/* Rodapé da página */}
                <Footer />
            </div>
        </>
    );
}

export default AboutPage;
