import React from "react";
import CardService from "../components/cardService";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Importação de imagens dos pontos turísticos
import copacabana from "../assets/imagens/bg.Copacabana.jpg";
import bc from "../assets/imagens/bg.bc.jpg";
import coliseu from "../assets/imagens/bg.coliseun.jpg";
import torre from "../assets/imagens/bg.torreeifel.jpg";
import mão from "../assets/imagens/bg.mãodealguem.jpg";
import elevador from "../assets/imagens/bg.elevador.jpg";

// Lista de objetos com dados dos pontos turísticos
const tourist_places = [
  { image: copacabana, titulo: "Praia de Copacabana", paragrafo: "Venha conhecer a melhor praia da cidade" },
  { image: bc, titulo: "Balneário Camboriú", paragrafo: "Praia de Balneário Camboriú" },
  { image: coliseu, titulo: "Coliseu de Roma", paragrafo: "Venha conhecer um grande monumento histórico" },
  { image: torre, titulo: "Torre Eiffel", paragrafo: "Venha conhecer a grande Torre Eiffel" },
  { image: mão, titulo: "Mão de Alguém", paragrafo: "Venha conhecer a mão de alguém" },
  { image: elevador, titulo: "Elevador de 100 Andares", paragrafo: "Venha conhecer o grande elevador de 100 andares" }
];

// Componente Carousel
const Carousel = () => {
  return (
    <>
      {/* Título do carrossel */}
      <div className="relative z-10 w-full">
        <h1 className="text-4xl font-extrabold text-center mt-10 mb-10 text-black drop-shadow-lg">
          Pontos turísticos locais mais visitados
        </h1>
      </div>

      {/* Swiper com condicional baseado no número de itens */}
      <Swiper
        slidesPerView={3}
        spaceBetween={20} // Correção: estava "spacebetween"
        loop={true}
        breakpoints={{ // Correção: estava "breackpoints"
          640: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20
          }
        }}
      >
        {/* Mapeamento dos lugares turísticos */}
        {tourist_places.map((place, index) => (
          <SwiperSlide key={index}>
            <CardService
              img={place.image}
              alt={place.paragrafo}
              titulo={place.titulo}
              descricao={place.paragrafo}
              link="#"
              botao="Saiba mais"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
