import React from "react";

const Hero = (props) => {
    return (
        <>
            <div
                className="relative h-[862px] bg-cover bg-center flex items-center justify-center text-white"
                style={{ backgroundImage: `url(${props.img})` }}
            >
                <div />
                <div className="relative z-10 text-center p-4">
                    <h1 className="text-4xl    text-shadow-black text-shadow-lg md:text-5xl font-bold mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                        {props.titulo}
                    </h1>
                    <p className="text-lg md:text-x2 mb-6 max-w-3xl mx-auto text-shadow-black text-shadow-lg drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                        {props.paragrafo}
                    </p>
                    <a
                        href="#"
                        className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-3 rounded-lg transition duration-300"
                    >{props.botao}</a>
                </div>
            </div>
        </>
    )

}



export default Hero;