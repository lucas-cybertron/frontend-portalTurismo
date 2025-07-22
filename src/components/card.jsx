// Importa o React, necessário para criar componentes funcionais
import React from "react";

// Criação de um componente funcional chamado Card que recebe 'props' como parâmetro
const Card = (props) => {
    return (
        <>
            {/* Fragmento React (não adiciona uma tag extra no DOM) */}
            
            {/* Div que centraliza o conteúdo do card */}
            <div className="text-center">
                
                {/* Card com fundo cinza claro, transparência, cantos arredondados e padding */}
                <div className="bg-gray-100 opacity-70 rounded-lg p-112">
                    
                    {/* Título principal com fonte grande e em negrito */}
                    <h1 className="text-5xl font-bold text-gray-900 -mt-40">
                        {props.titulo} {/* Exibe o valor passado como "titulo" */}
                    </h1>

                    {/* Parágrafo com texto escuro e tamanho grande */}
                    <p className="text-gray-800 text-3xl font-bold">
                        {props.paragrafo} {/* Exibe o valor passado como "paragrafo" */}
                    </p>

                </div>
            </div>
        </>
    );
};

// Exporta o componente para ser utilizado em outros arquivos
export default Card;
