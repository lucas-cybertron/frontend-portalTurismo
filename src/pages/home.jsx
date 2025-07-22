import React from "react";
import Footer from "../components/footer";     // Importa o componente Footer (rodapé)
import Hero from "../components/hero";         // Importa o componente Hero (banner principal)
import Navbar from "../components/navbar";     // Importa o componente Navbar (barra de navegação)
import background from "../assets/imagens/bg.jpg";  // Importa a imagem de fundo para o Hero

const Home = () => {
    return (
        <>
            {/* Container principal usando flexbox em coluna e altura mínima da tela */}
            <div className="flex flex-col min-h-screen h-[500px]">
                {/* Barra de navegação no topo */}
                <Navbar />

                {/* Seção principal com o componente Hero */}
                <div>
                    {/* Componente Hero recebe imagem de fundo, título, parágrafo e texto do botão */}
                    <Hero
                        img={background}
                        titulo="Serra Lima"
                        paragrafo="conheça nossas atrações"
                        botao="saiba mais"
                    />
                </div>

                {/* Rodapé da página */}
                <Footer />
            </div>
        </>
    )
}

export default Home;
