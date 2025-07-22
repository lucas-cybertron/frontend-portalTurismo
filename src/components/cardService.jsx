// Importa o React (obrigatório em componentes JSX)
import React from "react";

// Componente funcional CardService que recebe 'props'
const CardService = (props) => {
    return (
        <>
            {/* Card visual: container centralizado com gradiente e sombra */}
            <div className="w-full max-w-sm sm:max-w-md md:max-w-lg 
                bg-gradient-to-b from-lime-700 to-lime-200 
                border-gray-200 rounded-2xl shadow-md 
                overflow-hidden m-2 flex flex-col 
                ml-auto mr-auto cursor-pointer"
            >

                {/* Imagem principal do card */}
                <img
                    src={props.img} // Caminho da imagem vindo das props
                    alt={props.alt} // Texto alternativo para acessibilidade
                    className="w-full h-48 sm:h-56 md:h-64 object-cover" // Altura responsiva, imagem cortada para preencher
                />

                {/* Conteúdo textual abaixo da imagem */}
                <div className="p-4 flex flex-col flex-grow">
                    
                    {/* Título do serviço */}
                    <h1 className="text-lg sm:text-xl font-semibold text-gray-950">
                        {props.titulo}
                    </h1>

                    {/* Descrição do serviço */}
                    <p className="text-gray-800 mt-2 text-sm sm:text-base">
                        {props.descricao}
                    </p>

                    {/* Botão com link para mais detalhes */}
                    <a 
                        href={props.link}
                        className="mt-4 inline-block bg-lime-500 text-white px-4 py-4 rounded-3xl text-center hover:bg-lime-300 transition duration-300"
                    >
                        {props.botao}
                    </a>
                </div>
            </div>
        </>
    );
}

// Exporta o componente para que possa ser usado em outros arquivos
export default CardService;
