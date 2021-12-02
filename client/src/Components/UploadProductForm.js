import { useState, useRef } from "react"
import { uploadFile } from "react-s3"
import axios from "axios"
import dotenv from 'dotenv';
dotenv.config();
require('dotenv').config();

let url = null;

if (!process.env.NODE_ENV === "production") {
  url = "http://localhost:5000/posts/";
} else {
  url = "https://lulumarionnette.herokuapp.com/posts/";
}

export default function UploadProductForm() {
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    descriptionDetails: "",
    material: "",
    closure: "",
    length: "",
    style: "",
    price: "",
    tags: [],
    productImage: ""
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({...inputs, [name]: value})
  }

  const config = {
    bucketName:process.env.REACT_APP_AWS_BUCKET_NAME,
    region:process.env.REACT_APP_AWS_REGION,
    accessKeyId:process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey:process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
  }
  // console.log(config)

  const fileInput = useRef()

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, description,  descriptionDetails, material, closure, length, style, price,
      tags, productImage } = inputs

      const newproduct = { name, description,  descriptionDetails, material, closure, length, style, price, tags, productImage }

    let file = fileInput.current.files[0]

      let newFileName = fileInput.current.files[0].name
    console.log(newFileName)

    // productImage =
    // "https://lulumarionnettebucket.s3.eu-west-2.amazonaws.com/" + newFileName;

    uploadFile(file, config, {
      header: {"content-type": "application/json",},
    })
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
console.log(config)

    await axios
      .post(url, newproduct)
      .then((res) => console.log(res.data));
  }

  return (
    <section className="max-w-3xl mx-auto mb-12">
      <div>
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          action="/submit"
          method="POST"
          enctype="multipart/form-data"
          onSubmit={handleSubmit}
          >
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full h-20 py-2 px-3 text-gray-700 text-sm focus:outline-none focus:placeholder-transparent"
              type="text"
              name="name"
              placeholder="Nom du bijoux"
              value={inputs.name || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="description"
              placeholder="Description du bijoux"
              value={inputs.description || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full h-20 py-2 px-3 text-gray-700 text-sm focus:outline-none focus:placeholder-transparent"
              type="text"
              name="descriptionDetails"
              placeholder="Description détaillée du bijoux"
              value={inputs.descriptionDetails || ""}
              onChange={handleChange}
              
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full h-20 py-2 px-3 text-gray-700 text-sm focus:outline-none focus:placeholder-transparent"
              type="text"
              name="material"
              placeholder="Composition bijoux"
              value={inputs.material || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full h-20 py-2 px-3 text-gray-700 text-sm focus:outline-none focus:placeholder-transparent"
              type="text"
              name="closure"
              placeholder="Type de fermoir"
              value={inputs.closure || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full h-20 py-2 px-3 text-gray-700 text-sm focus:outline-none focus:placeholder-transparent"
              type="number"
              name="length"
              placeholder="Longueur du bijoux"
              value={inputs.length || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full h-20 py-2 px-3 text-gray-700 text-sm focus:outline-none focus:placeholder-transparent"
              type="style"
              name="style"
              placeholder="Style du bijoux"
              value={inputs.style || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full h-20 py-2 px-3 text-gray-700 text-sm focus:outline-none focus:placeholder-transparent"
              type="text"
              name="price"
              placeholder="Prix"
              value={inputs.price || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <input type="file" name="productImage" ref={fileInput}/>
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
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}