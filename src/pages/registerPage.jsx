import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import bgregister from "../assets/imagens/bgregister.jpg"
import RegisterForm from "../components/registerForm";

const RegisterPage = () =>  {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar/>
                <div
                       className="flex  h-[1000px] m-0.5 bg-cover bg-center items-center justify-center"
                 style={{ backgroundImage: `url('${bgregister}')` }}
                >
                    
                   <RegisterForm/>
               
                </div>
                
                <Footer />
            </div>



        </>
    )

}
export default RegisterPage;