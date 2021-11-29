import React from "react";
import Loader from "../Components/Loader";
import ProductCard from "../Components/ProductCard";
import { useAxiosGet } from "../Hooks/HttpRequest";
import Banner from "../Views/Banner";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  let url = null;

  if (!process.env.NODE_ENV === "production") {
    url = "http://localhost:5000/posts/";
  } else {
    url = "https://lulumarionnette.herokuapp.com/posts/";
  }

  // let x = useAxiosCreate(url, {
  //   name: "name",
  //   description: "desxript",
  //   descriptionDetails: "desc details",
  //   material: "materials",
  //   closure: "closure",
  //   length: 1,
  //   style: "style",
  //   price: "99",
  //   tags: "tags",
  //   productImage: "https://s32071.pcdn.co/wp-content/uploads/metal-stamping-cuff-bracelets.jpg.optimal.jpg"
  // })

  let products = useAxiosGet(url);

  let content = null;
  let carouselContent = null;

  if (products.loading) {
    content = <Loader />;
  }

  if (products.error) {
    content = <p> Error, refresh or try again later.</p>;
  }

  if (products.data) {
    content = products.data.map((product) => (
      <div key={product._id}>
        <ProductCard product={product} />
      </div>
    ));
  }

  if (products.data) {
    carouselContent = (
      <Carousel fade={true} pause={false}>
        {products.data.map((product) => (
          <Carousel.Item interval={2000} style={{ height: "300px" }}>
            <img
              style={{ height: "700px" }}
              className="d-block w-100"
              src={`${product.productImage}`}
              alt={`${product.name}`}
            />
            <Carousel.Caption>
              <h3>{`${product.name}`}</h3>
              <p>{`${product.description}`}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }

  return (
    <div>
      <div className="max-w-3xl mx-auto mb-10">{carouselContent}</div>
      <div>
        <Banner />
      </div>
      <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-4 pb-20">
        {content}
      </div>
      <footer />
    </div>
  );
}

export default Home;
