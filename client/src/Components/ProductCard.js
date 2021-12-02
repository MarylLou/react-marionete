import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  
  return (
    <div className="max-w-sm overflow-auto rounded-lg shadow-xl bg-white p-3">
      <Link to={`/product/${props.product._id}`}>
        <img
          src={`${props.product.productImage}`}
          alt={`${props.product.name}`}
          className="w-full items-start rounded-lg"
        />

        <div
          className="mt-3 text-purple-300 text-2xl font-medium mb-2"
          style={{ fontFamily: "Dancing Script" }}>
          {props.product.name}
        </div>

        <div>
          <ul>
            <li className="text-sm">
              <p>{props.product.description}</p>
            </li>
            <li className="mr-4 text-sm text-right">
              <p>{props.product.price}.00€</p>
            </li>
          </ul>
        </div>
      </Link>
    </div>
  );
}
