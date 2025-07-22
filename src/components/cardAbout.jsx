// Importa o React (necessário para componentes funcionais)
import React from "react";

// Importa o componente Card que será usado dentro do CardAbout
import Card from "./card";

// Define o componente funcional CardAbout, que também recebe 'props' (ainda que não estejam sendo usados aqui)
const CardAbout = (props) => {
  return (
    // Container principal do componente
    <div>
      {/* Div com arredondamento nos cantos, padding e largura máxima muito grande */}
      <div className="rounded-lg max-w-[10000px] p-8">
        
        {/* Uso do componente Card, passando as props titulo e paragrafo */}
        <Card 
          titulo="meu tempo no curso de programador web" 
          paragrafo="eu estou gostando bastante pois vejo que estou realmente aprendendo a programar graças ao tio jere" 
        />

      </div>
    </div>
  );
};

// Exporta o componente para que possa ser usado em outros arquivos
export default CardAbout;
