import React from "react";
// import Navigation from "./Navigation";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow mb-10">
      <div className="max-w-3xl mx-auto py-3 px-6 md:px-0 md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="../../images/aries-computer-icons.png"
              className="h-8  rounded-full"
              alt=""></img>
            <Link to="/">
              <h1
                className="text-purple-300 text-2xl hover:text-gray-700 ml-4 md:mr-44"
                style={{ fontFamily: "Dancing Script" }}>
                LuluMarionNette
              </h1>
            </Link>
          </div>

          <div className="md:flex items-center md:mt-0">
            <div className="flex flex-col justify-between md:flex-row md:ml-44">
            <ul className="">
              <li>
                <Link
                  to="/"
                  className="my-1 text-sm text-gray-700 hover:text-purple-300 md:mx-4 md:my-0">
                  Collection
                </Link>
              </li>
              <li>
                <Link
                  to="./About"
                  className="my-1 text-sm text-gray-700 hover:text-purple-300 md:mx-4 md:my-0">
                  Confidences
                </Link>
              </li>
              <li>
                <Link
                  to="./ContactUS"
                  className="my-1 text-sm text-gray-700 hover:text-purple-300 md:mx-4 md:my-0">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="./UploadProductForm"
                  className="my-1 text-sm text-gray-700 hover:text-purple-300 md:mx-4 md:my-0">
                  Admin
                </Link>
              </li>
            </ul>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
