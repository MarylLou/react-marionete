import React from "react";
import emailjs from "emailjs-com";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_edm3age",
        "template_9qegolg",
        e.target,
        "user_bel0XnHVor5z3ZF7tHHU0"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    document.forms[0].elements["confirmation"].value =
      "Merci pour votre message";
  }

  return (
    <section className="max-w-3xl mx-auto mb-12">
    <div className="bg-white lg:flex lg:shadow-lg lg:rounded-lg">
        <div className="p-12 text-center">
            <h1 className="text-2xl text-gray-600 md:text-3xl">Contactez</h1>
            <h1 className="text-2xl text-purple-300 font-bold md:text-3xl" style={{ fontFamily: "Dancing Script" }}>Lulu MarionNette</h1>
            <p className="mt-4">
            Une pièce préférée?  Un petit chouchou?<br />
            N'hésitez pas à compléter le formulaire ci-dessous.
            </p>
        </div>
    </div>

    <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={sendEmail}>

          <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full h-20 py-2 px-3 text-gray-700 text-sm focus:outline-none focus:placeholder-transparent"
            type="text"
            name="name"
            placeholder="Entrez votre nom"
          />
        </div>

        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full h-20 py-2 px-3 text-gray-700 text-sm focus:outline-none focus:placeholder-transparent"
            type="email"
            pattern="+@globex\.com"
            name="email"
            placeholder="Entrez votre email"
          />
        </div>

        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full h-20 py-2 px-3 text-gray-700 text-sm focus:outline-none focus:placeholder-transparent"
            type="text"
            name="subject"
            placeholder="Entrez votre objet"
          />
        </div>

        <div className="mb-4">
          <textarea
            className="shadow appearance-none border rounded h-96 w-full py-2 px-3 text-gray-700 text-sm focus:outline-none focus:shadow-outline focus:placeholder-transparent"
            type="email"
            name="message"
            placeholder="votre message"
          />
          <input className="shadow appearance-none border rounded w-full h-20 py-2 px-3 text-xl text-purple-300 leading-tight focus:outline-none focus:shadow-outline focus:placeholder-transparent"
          style={{ fontFamily: "Dancing Script" }}
          name="confirmation"
          placeholder="LuluMarionNette est á votre écoute"/>
        </div>

        <div className="px-4 py-3 text-center">
          <button
            type="submit"
            className="
              inline-block
              px-5
              py-3
              rounded-lg
              focus:outline-none focus:ring focus:ring-offset-2
              uppercase
              tracking-wider

              text-sm
              sm:text-base
              bg-purple-300
              text-white
              hover:bg-gray-200
              focus:ring-red-300 focus:ring-opacity-50
              active:bg-gray-400">
            Envoyer
          </button>
        </div>
      </form>
</section>
);
}