import React from "react";
import Footer from "../components/footer";    // Importa o rodapé
import Hero from "../components/hero";        // Importa o componente Hero (banner principal)
import Navbar from "../components/navbar";    // Importa a barra de navegação
import ratinho from "../assets/imagens/ratinhinho.jpg"  // Importa a imagem para o Hero
import Carousel from "../components/carousel"; // Importa o componente Carousel (carrossel de serviços)

const ServicePage = () => {
    return(
        <>
            {/* Container principal da página com layout flex vertical */}
            <div className="flex flex-col min-h-screen">
                {/* Barra de navegação no topo */}
                <Navbar />
                
                <div>
                    {/* Componente Hero com imagem e textos */}
                    <Hero 
                        img={ratinho} 
                        titulo="Portal de serviços" 
                        paragrafo="venha conhecer nossos serviços" 
                        botao="saiba mais" 
                    />
                </div>

                <div>
                    {/* Componente Carousel para exibir serviços em formato de carrossel */}
                    <Carousel />
                </div>

                {/* Rodapé da página */}
                <Footer />
            </div>
        </>
    )
}

export default ServicePage;
