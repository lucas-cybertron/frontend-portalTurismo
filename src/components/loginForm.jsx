import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  // Estado para armazenar email e senha
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  // Hook do react-router-dom para navegar programaticamente
  const navigate = useNavigate();

  // Função que executa ao submeter o formulário
  const handleSubmit = async (e) => {
    e.preventDefault(); // evita recarregar a página

    try {
      // Faz a requisição POST para o login na API
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password: senha, // campo esperado pelo backend é "password"
      });

      // Dados do usuário retornados pela API
      const userData = response.data;

      // Salva os dados do usuário no localStorage para manter sessão
      localStorage.setItem("user", JSON.stringify(userData));

      alert("Usuário logado com sucesso!!");

      // Redireciona para a página principal
      navigate("/");
    } catch (error) {
      if (error.response) {
        // Erro de resposta da API (ex: credenciais inválidas)
        alert("Erro ao logar usuário, email ou senha incorretos.");
      } else {
        // Erro de conexão (ex: servidor offline)
        alert("Erro ao conectar ao servidor.");
      }
    }
  };

  return (
    <>
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-medium">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
              placeholder="Digite seu email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block mb-1 font-medium">
              Senha
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-500 text-sm sm:text-base"
              placeholder="Digite sua senha"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-lime-500 hover:bg-lime-600 text-white px-6 py-2 rounded-lg transition duration-300 cursor-pointer"
          >
            Entrar
          </button>

          <p className="mt-6 text-center text-sm text-gray-600">
            Não tem conta?{" "}
            <a
              href="/register"
              className="text-green-600 hover:underline p-2"
            >
              Cadastre-se
            </a>
          </p>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
