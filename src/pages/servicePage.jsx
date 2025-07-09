import React from "react";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import ratinho from "../assets/imagens/ratinhinho.jpg"
import Carousel from "../components/carousel";

const ServicePage = () => {
    return(
         <>
         <div className=" flex flex-col min-h-screen">
        <Navbar />
         
         <div>
        <Hero img = {ratinho} titulo = "Portal de serviços " paragrafo = "venha conhecer nossos serviços" botao = "saiba mais"/>
        
         </div>
         <div>
          * <Carousel />
         </div>
         
        <Footer/>
         </div>
         
         
         
         
         </>

    )

}
export default ServicePage