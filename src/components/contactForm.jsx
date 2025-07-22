import React, { useState } from "react";
import bg from "../assets/imagens/bgvale.jpg";
import axios from "axios";

const ContactForm = () => {
  // Estado para controlar os dados do formulário
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Atualiza o estado conforme o usuário digita
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Função para enviar os dados ao backend
  const handleSubmit = async (e) => {
    e.preventDefault(); // previne recarregamento da página

    try {
      // Requisição POST para o endpoint do servidor
      const response = await axios.post("http://localhost:5000/api/contacts", {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });

      alert("Mensagem enviada com sucesso!");
      setFormData({ name: "", email: "", message: "" }); // Limpa o formulário
    } catch (error) {
      if (error.response) {
        alert("Erro ao enviar mensagem");
      } else {
        alert("Erro de conexão com o servidor");
      }
    }
  };

  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center px-5 py-8"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Container do formulário com fundo claro e bordas arredondadas */}
        <div className="bg-amber-50 py-10 px-6 sm:px-10 rounded-3xl shadow-lg max-w-3xl mx-auto mt-10 w-full">
          <h2 className="text-center font-bold mb-8 text-2xl">
            Entre em Contato
          </h2>

          {/* Formulário com espaçamento entre campos */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Campo Nome */}
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-1"
              >
                Nome
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Digite seu nome"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500 text-sm sm:text-base"
              />
            </div>

            {/* Campo E-mail */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-1"
              >
                E-mail
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Digite seu email"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
              />
            </div>

            {/* Campo Mensagem */}
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-1"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Digite sua mensagem"
                rows={5}
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500 text-sm sm:text-base resize-none"
              />
            </div>

            {/* Botão de envio */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-lime-400 hover:bg-lime-600 text-white px-6 py-2 rounded-lg transition duration-300 w-full sm:w-auto"
              >
                Enviar mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
