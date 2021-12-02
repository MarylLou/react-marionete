import React from "react";

function Banner() {
    return (
        <section className="max-w-3xl mx-auto mb-12">
        <div className="bg-white lg:flex lg:shadow-lg lg:rounded-lg">
            <div className="p-12 text-center">
                <h2 className="text-2xl text-purple-300 font-bold md:text-3xl">Mon manège à moi</h2>
                <p className="mt-4"> Venez décrouvrir la gamme de bracelets LuluMarionNette.
Chaque piéce à l’esthétique ultra soignée et féminine est une création unique.
Si l'une d'entre elles vous inpire, contactez LuluMarionNette pour plus d'information sur le bijoux de votre choix.
Les prix mentionnés dans cet article le sont à titre indicatif et ils sont susceptibles d’évoluer.</p>
            </div>
        </div>
    </section>
    );
  }

  export default Banner;