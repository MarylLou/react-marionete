import axios from "axios";
import React, { useState, useRef } from "react";
// import * as dotenv from 'dotenv';
import { uploadFile } from "react-s3"
// dotenv.config();


let url = null;

if (!process.env.NODE_ENV === "production") {
  url = "http://localhost:5000/posts/";
} else {
  url = "https://lulumarionnette.herokuapp.com/posts/";
}

export default function UploadProductForm() {
  const [values, setValues] = useState({
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
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values,[name]: value,});
    //alert(name + ' ' + value);
    // alert(values[0]);
  };

  const config = {
    albumBucketName: "",
    bucketRegion: "",
    accessKeyId: "",
    secretAccessKey: "",
  };

  const inputFile = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("item:", values);
    let {
      name,
      description,
      descriptionDetails,
      material,
      closure,
      length,
      style,
      price,
      tags,
      productImage,
    } = values;
    
    let file = inputFile.current.files[0];
    let newFileName = inputFile.current.files[0].fileName;
   console.log(newFileName);

    productImage =
      "https://lulumarionnettebucket.s3.eu-west-2.amazonaws.com/" + newFileName;

    uploadFile(file, config, {
      // mode: 'no-cors',
      header: {
        "content-type": "application/json",
      },
    })
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
    const post = {
      name,
      description,
      descriptionDetails,
      material,
      closure,
      length,
      style,
      price,
      tags,
      productImage,
    };

    await axios.post(url, post).then((res) => {
      console.log(res);
      console.log(res.data);
      //window.location = "/" //This line of code will redirect you once the submission is succeed
    });
  };

  return (
    <section className="max-w-3xl mx-auto mb-12">
      <div>
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          action="/submit"
          method="POST"
          enctype="multipart/form-data"
          onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full h-20 py-2 px-3 text-gray-700 text-sm focus:outline-none focus:placeholder-transparent"
              value={values.name}
              onChange={handleInputChange}
              type="text"
              name="name"
              placeholder="Nom du bijoux"
            />
          </div>
          <div className="mb-4">
            <input
              value={values.description}
              onChange={handleInputChange}
              type="text"
              name="description"
              placeholder="Description du bijoux"
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full h-20 py-2 px-3 text-gray-700 text-sm focus:outline-none focus:placeholder-transparent"
              value={values.descriptionDetails}
              onChange={handleInputChange}
              type="text"
              name="descriptionDetails"
              placeholder="Description détaillée du bijoux"
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full h-20 py-2 px-3 text-gray-700 text-sm focus:outline-none focus:placeholder-transparent"
              value={values.material}
              onChange={handleInputChange}
              type="text"
              name="material"
              placeholder="Composition bijoux"
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full h-20 py-2 px-3 text-gray-700 text-sm focus:outline-none focus:placeholder-transparent"
              value={values.closure}
              onChange={handleInputChange}
              type="text"
              name="closure"
              placeholder="Type de fermoir"
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full h-20 py-2 px-3 text-gray-700 text-sm focus:outline-none focus:placeholder-transparent"
              value={values.length}
              onChange={handleInputChange}
              type="number"
              name="length"
              placeholder="Longueur du bijoux"
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full h-20 py-2 px-3 text-gray-700 text-sm focus:outline-none focus:placeholder-transparent"
              value={values.style}
              onChange={handleInputChange}
              type="style"
              name="style"
              placeholder="Style du bijoux"
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full h-20 py-2 px-3 text-gray-700 text-sm focus:outline-none focus:placeholder-transparent"
              value={values.price}
              onChange={handleInputChange}
              type="text"
              name="price"
              placeholder="Prix"
            />
          </div>
          {/* <div className="mb-4">
          <label> Images :
            <input value={values.productImage} onChange={handleInputChange} type = "file" name = "productImage" ref={productImage}/>
          </label></div> */}
          <div className="mb-4">
            <input onChange={handleInputChange} type="file" ref={inputFile} />
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
              {" "}
              Ajouter{" "}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}