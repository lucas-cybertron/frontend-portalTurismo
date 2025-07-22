import React from "react";
import { SiFreenet } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-gradient-to-r from-white to-lime-600 text-black py-2 px-3 shadow-lg mt-auto">
        {/* Container flex para alinhar conteúdo */}
        <div className="w-full mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Texto da esquerda */}
          <div className="text-left mb-4 md:mb-0">
            <p className="text-sm text-black">
              Nova serra verde. Todos os direitos reservados.
            </p>
          </div>

          {/* Ícone e link social */}
          <div className="flex space-x-6">
            {/* Corrigido 'hre' para 'href' */}
            <a href="#" className="hover:text-lime-600" aria-label="Freenet">
              <SiFreenet size={24} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
