import React from "react";
import CardService from "./cardservice";
import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css'
 
import copacabana from "../assets/imagens/bg.Copacabana.jpg"
import bc from "../assets/imagens/bg.bc.jpg"
import coliseu from "../assets/imagens/bg.coliseun.jpg"
import torre from "../assets/imagens/bg.torreeifel.jpg"
import mão from "../assets/imagens/bg.mãodealguem.jpg"
import elevador from "../assets/imagens/bg.elevador.jpg"
 
 
 
 
const tourist_places =[
 {image: copacabana, titulo:"praia de copacabana", paragrafo:"venha conhecer a melhor praia da cidade"},
 {image:bc, titulo:"balneareo cambouriu", paragrafo:"praia de balnearo cambouriu"},
 {image: coliseu, titulo:"coliseu de roma", paragrafo:"venha conhecer num grande monumento histórico" },
 {image:torre , titulo:" torre eifel ", paragrafo:"venha conhec er a grande torre eifel " },
 {image:mão , titulo:" mão de alguem ", paragrafo:"venha conhecer a mão de alguem " },
 {image: elevador , titulo:"elevador de 100 andares ", paragrafo:"venha conhecer o grande elevador de 100 andares " }
]
const Carousel = () =>{
    return(
        <>
        <div className=" relative z-10 w-full">
            <h1 className=" text-4xl font-extrabold  text-center mt-10 mb-25 text-black drop-shadow-lg ">
            Pontos turísticos locais mais visitados
            </h1>
        </div>
        {tourist_places.length > 3 ? (
            <Swiper
               
            slidesPerView={3}
            spacebetween={10}
            loop={true}
            breackpoints={{
                640:{
                    slidesPerView:3,
                    spacebetween:10
                },
                1024:{
                    slidesPerView:3,
                    spacebetween:20
                }
            }}>
                {tourist_places.map((place, index)=>(
                    <SwiperSlide key={index}>
                        <CardService
                        img = {place.image}
                        alt = {place.paragrafo}
                        titulo = {place.titulo}
                        descricao = {place.paragrafo}
                        link="#"
                        botao="saiba mais"
                        />
                    </SwiperSlide>
                   
                ))}
            </Swiper>
        ):(
            <Swiper
            slidesPerView={3}
            spacebetween={5}
            loop={true}
            breackpoints={{
                640:{
                    slidesPerView:3,
                    spacebetween:5
                },
                1024:{
                    slidesPerView:3,
                    spacebetween:5
                }
            }}>
                {tourist_places.map((place, index)=>(
                    <SwiperSlide key={index}>
                        <CardService
                        img = {place.image}
                        alt = {place.paragrafo}
                        titulo = {place.titulo}
                        descricao = {place.paragrafo}
                        link="#"
                        botao="saiba mais"
                        />
                    </SwiperSlide>
                   
                ))}
            </Swiper>
        )}
   
       
        </>
 
    )
 
}
export default Carousel