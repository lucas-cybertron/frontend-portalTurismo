import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import bglogin from "../assets/imagens/bglogin.jpg"
import LoginForm from "../components/loginForm";

const LoginPage = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <div
                   className="relative bg-bg-cover h-[900px]  bg-center flex-grow flex items-center justify-center "
                 style={{ backgroundImage: `url('${bglogin}')` }}
                >
                    
                        <LoginForm />
                    
                  
               
                </div>
                
                <Footer />
            </div>



        </>
    )

}

export default LoginPage