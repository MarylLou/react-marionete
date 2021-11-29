import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import { useAxiosGet } from "../Hooks/HttpRequest";
import { Link } from "react-router-dom";

function Product() {
  const { id: _id } = useParams();

  let url = null;

  if (!process.env.NODE_ENV === "production") {
    url = "http://localhost:5000/posts/" + _id;
  } else {
    url = "https://lulumarionnette.herokuapp.com/posts/" + _id;
  }

  let product = useAxiosGet(url);

  let content = null;

  if (product.loading) {
    content = <Loader />;
  }

  if (product.error) {
    content = <p> Error, refresh or try again later.</p>;
  }

  if (product.data) {
    content = (
      // container padding
      <div className="max-w-3xl mx-auto pt-20 pb-20 grid md:grid-cols-3">
        <div className="p-3 max-auto">
          <img
            className="
        rounded-lg
        shadow-xl
        object-cover
        object-center"
            src={product.data.productImage}
            alt={product.data.name}
          />
        </div>
        {/* <div className="p-3 w-1/2">
          <img
            className="
        rounded-lg"
            src={product.data.bestWith1}
            alt={product.data.name}
          />
          <img
            className="
          mt-3
        rounded-lg"
            src={product.data.bestWith2}
            alt={product.data.name}
          />
        </div> */}
        <div className="p-3 max-auto">
          <h1
            className="
              font-bold
              text-gray-600
              sm:text-xl md:text-xl xl:text-4xl">
            {product.data.name}
          </h1>
          <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
            {product.data.price}€
          </p>
          <br />
          <p
            className="lg:text-1xl
              xl:text-2xl">
            Description
          </p>
          <p>{product.data.description}</p>
          <br />
          <p>{product.data.descriptionDetails}</p>
          <br />
          <p>{product.data.material}</p>
          <p>{product.data.length}</p>
          <p>{product.data.style}</p>

          <div className="px-4 py-3 text-center">
            <Link
              to="/ContactUs"
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
              focus:ring-gray-300 focus:ring-opacity-50
              active:bg-gray-400">
              Contact
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default Product;
