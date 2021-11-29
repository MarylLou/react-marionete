import React from 'react';

function About() {
    return(
        <section className="max-w-3xl mx-auto mb-12">
            <div className="bg-white lg:flex lg:shadow-lg lg:rounded-lg">
                <div className="p-12 text-center">
                    <h1 className="text-2xl text-gray-600 md:text-3xl">Confidences de</h1>
                    <h1 className="text-2xl text-purple-300 font-bold md:text-3xl" style={{ fontFamily: "Dancing Script" }}>Lulu MarionNette</h1>
                    <p className="mt-4">
                        Suite au succès d'une collection née d'un hobby, il y a á peine quelques lunes,<br />
                        LuluMarionNette vous offre une vaste gamme de bijoux fait main<br />
                        Une creaction unique pour des souvenirs inoubliables.
                    </p>
                </div>
            </div>
        </section>
        // <div className="mt-10 mb-10 text-center" style={{maxWidth:"950"}}>
        //     <h1 className="text-4xl mb-8">Confidences de </h1>
        //     <h3
        //     className=" 
        //                 text-purple-300 text-6xl
        //                 mb-4 md:mb-0"
        //     style={{ fontFamily: "Dancing Script" }}>
        //     Lulu MarionNette
        //   </h3>

        //     <p className="text-2xl italic leading-normal">
        //         Suite au succès d'une collection née d'un hobby, il y a á peine quelques lunes,<br />
        //         LuluMarionNette vous offre une vaste gamme de bijoux fait main<br />
        //         Une creaction unique pour des souvenirs inoubliables.
        //     </p>         
        // </div>
    )
}

export default About