import React from "react";
import { SiFreenet } from "react-icons/si";

const Footer = () => {
return( 
    <>
    <footer className="w-full bg-gradient-to-r from-[#fff] to-lime-600 text-black py-2 px-3 shadow-1g mt-auto">
        <div className="w-full mx-auto flex flex-col justify-between items-center">

            <div className="text-left mb-4 md:mb-0">
            <p className="text-sm text-black">Nova serra verde. todos os direitos reservados</p>
            </div>
            <div className="flex space-x-6" >
            <a hre="#" className="hover:text-lime-600"><SiFreenet /></a>

            </div>
        </div>
    
    </footer>
    </>
)

}

export default Footer