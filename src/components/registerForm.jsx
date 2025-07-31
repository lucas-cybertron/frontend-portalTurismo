import React, {useState} from "react";
import axios from 'axios'

const RegisterForm = () => {
    const [nome, setNome] = useState('')       // estado para o nome
    const [email, setEmail] = useState('')     // estado para o email
    const [senha, setSenha] = useState('')     // estado para a senha

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Envia requisição POST para criar usuário
            const response = await axios.post("https://backend-portalturismo-tyu9.onrender.com/api/users", {
                name: nome,
                email,
                password : senha
            });

            // Exibe alerta com dados do usuário criado
            alert("Usuário cadastrado com sucesso!!" + ` Nome: ${response.data.name} Email: ${response.data.email}`);

            // Redireciona para página de login após cadastro
            window.location.href = "/login";
        } catch (error) {
            if(error.response){
                alert("Erro ao cadastrar usuário");
            } else {
                alert("Erro ao conectar ao servidor");
            }
        }
    }

    return (
        <>
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6 text-black">Cadastrar</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="nome">Nome</label>
                        <input
                            id="nome"
                            type="text"
                            name="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none
                            focus:ring-2 focus:ring-green-500 text-sm sm:text-base text-black"
                            placeholder="Digite seu nome" />
                    </div>
                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none
                            focus:ring-2 focus:ring-green-500 text-sm sm:text-base text-black"
                            placeholder="Digite seu email" />
                    </div>
                    <div>
                        <label htmlFor="password">Senha</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none
                            focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                            placeholder="Digite sua senha" />
                    </div>
                    <button 
                        type="submit" 
                        className="bg-green-500 hover:bg-green-600 px-6 py-2
                        rounded-lg transition duration-300 w-full sm:w-full mt-2 text-black"
                    >
                        Cadastrar
                    </button>
                </form>
            </div>
        </>
    )
}

export default RegisterForm
