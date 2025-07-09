import React from "react";
import Footer from "../components/footer"
import Navbar  from "../components/navbar";
import CardAbout from "../components/cardAbout";
import bgAbout from "../assets/imagens/bgAbout.jpg"



const AboutPage = () => {
    return (
        <>
 
            <div className="flex flex-col min-h-screen">
            <Navbar />
                <div   className="relative min-h-screen bg-cover bg-center"
                   
                      style={{ backgroundImage: `url('${bgAbout}')` }}
                >
                
            <CardAbout 
            img ={bgAbout}
            />
                </div>
                <div>
                
                </div>
                <Footer />
            </div>
        </>
    )
}

export default AboutPage;
