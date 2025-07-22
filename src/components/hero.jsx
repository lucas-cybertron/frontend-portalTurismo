import React from "react";

const Hero = (props) => {
  return (
    <>
      {/* Container principal com altura fixa, imagem de fundo, e centralização do conteúdo */}
      <div
        className="relative h-[862px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${props.img})` }}
      >
        {/* Div vazia - pode ser removida se não tiver uso */}
        <div />

        {/* Conteúdo do texto e botão, com z-index para ficar sobre a imagem */}
        <div className="relative z-10 text-center p-4">
          {/* Título principal */}
          <h1 className="text-4xl text-shadow-black text-shadow-lg md:text-5xl font-bold mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            {props.titulo}
          </h1>

          {/* Parágrafo com texto e sombra para melhor leitura */}
          <p className="text-lg md:text-x2 mb-6 max-w-3xl mx-auto text-shadow-black text-shadow-lg drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            {props.paragrafo}
          </p>

          {/* Botão de ação com estilos para hover e transição */}
          <a
            href="#"
            className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-3 rounded-lg transition duration-300"
          >
            {props.botao}
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
