import React from "react";

function Legal() {
  return (
    <section className="max-w-3xl mx-auto mb-12">
    <div className="bg-white lg:flex lg:shadow-lg lg:rounded-lg">
        <div className="p-12 text-center">
            <h2 className="text-2xl text-purple-300 font-bold md:text-3xl">MENTIONS LÉGALES</h2>
            <p className="mt-4"> Le présent site a été réalisé par Maryl.</p>
            <p className="mt-4">
            Le présent site est hébergé par Heroku.com région Europe : Heroku, Inc.,
  321 11th Street, San Francisco, CA, USA - Téléphone : +44 800 808-5158.
            </p>
            <p className="mt-4">
            Pour des besoins de statistiques et d'affichage, le présent site est
  suceptible d'utiliser des cookies. Il s'agit de petits fichiers textes
  stockés sur votre disque dur afin d'enregistrer des données techniques
  sur votre navigation. Certaines parties de ce site ne peuvent être
  fonctionnelle sans l’acceptation de cookies.
            </p>
            <p className="mt-4">
            Tous droits de reproduction et de représentation réservés. Les photos
  sont contractuelles. Toute reproduction ou représentation, intégrale ou
  partielle, du site ou de l'un des quelconques éléments qui le composent,
  est expressément interdite, de même que leur altération.
            </p>          
        </div>
    </div>
</section>
  );
}

export default Legal;