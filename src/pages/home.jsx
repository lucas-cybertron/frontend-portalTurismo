import React from "react";
import Footer from "../components/footer"
import Hero from "../components/hero";
import Navbar  from "../components/navbar";
import background from "../assets/imagens/bg.jpg";


const Home = () => {
    return (
        <>
 
            <div className="flex flex-col min-h-screen h-[500px]">
            <Navbar />
                <div>
                
                    <Hero img = {background} titulo = "Serra Lima " paragrafo = "conheça nossas atrações" botao = "saiba mais "  />
                </div>
               
                <Footer />
            </div>
        </>
    )
}

export default Home;
