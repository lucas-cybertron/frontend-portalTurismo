import React from "react";
import ContactForm from "../components/contactForm"; // Importa o formulário de contato
import Footer from "../components/footer";           // Importa o rodapé
import Navbar from "../components/navbar";           // Importa a barra de navegação

const ContactPage = () => {
    return (
        <>
            {/* Container principal com flexbox em coluna e altura mínima da tela */}
            <div className="flex flex-col min-h-screen">
                {/* Componente Navbar no topo da página */}
                <Navbar />

                {/* Container para o formulário de contato */}
                <div>
                    <ContactForm />
                </div>

                {/* Rodapé da página */}
                <Footer />
            </div>
        </>
    )
}

export default ContactPage;
