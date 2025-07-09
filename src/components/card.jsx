import React from "react";

const Card = (props) => {
    return (
        <>
        {/* Card centralizado */ }
        < div className=" text-center " >
        <div className="bg-gray-100 opacity-70   rounded-lg p-112  ">
            <h1 className="text-5xl font-bold text-gray-900  -mt-40 ">{props.titulo}</h1>
            <p className="text-gray-800 text-3xl font-bold ">{props.paragrafo}</p>
        </div>
        </div>
        </>

    );
};

export default Card;
