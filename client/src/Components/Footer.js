import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-white bg-purple-300">
      <div className="max-w-3xl mx-auto py-6">
        <div className="flex flex-col items-center justify-between mt-6 md:flex-row">
          <div className="flex md:m-0 -mx-4">
            <h3 className="text-sm font-bold text-white hover:text-gray-400">
              © LuluMarionNette - 2021 Tous droits réservés
            </h3>
          </div>

          <div>
            <Link to="/Legal">
              <h3 className="text-sm font-bold text-white hover:text-gray-400">
                Mentions Légales
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
