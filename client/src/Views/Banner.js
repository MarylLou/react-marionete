import React from "react";

function Banner() {
    return (
        <section className="max-w-3xl mx-auto mb-12">
        <div className="bg-white lg:flex lg:shadow-lg lg:rounded-lg">
            <div className="p-12 text-center">
                <h2 className="text-2xl text-purple-300 font-bold md:text-3xl">Mon manège à moi</h2>
                <p className="mt-4"> Tu me fais tourner la tête, Mon manège à moi c'est toi. Je suis toujours à la fête, Quand tu me tiens dans tes bras. Je ferais le tour du monde, Ça ne tourn'rait pas plus qu'ça. La Terre n'est pas assez ronde, Pour m'étourdir autant qu'toi.</p>
            </div>
        </div>
    </section>

       
        // <div className="mt-10 mb-10 text-center" style={{maxWidth:"950"}}>
        //     <h1 className="text-4xl mb-8">Mon manège à moi</h1>
        //     <p className="text-2xl italic leading-normal">
        //     Tu me fais tourner la tête, Mon manège à moi c'est toi
        //     Je suis toujours à la fête, Quand tu me tiens dans tes bras<br />
        //     Je ferais le tour du monde, Ça ne tourn'rait pas plus qu'ça<br />
        //     La Terre n'est pas assez ronde, Pour m'étourdir autant qu'toi
        //     </p>
        // </div>
    );
  }

  export default Banner;