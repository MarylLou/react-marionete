import React from 'react';
import { Link } from 'react-router-dom';

export default function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} className="max-w-sm overflow-auto rounded-lg shadow-xl bg-white p-3">
      <Link to={`/product/${product._id}`}>
        <img className="w-full items-start rounded-lg" src={product.image} alt={product.name} />
      </Link>
      <div className="mt-3 text-purple-300 text-2xl font-medium mb-2"
          style={{ fontFamily: "Dancing Script" }}>
        <Link to={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </Link>
        <div>
        <div className="text-sm">${product.description}</div>
          <div className="mr-4 text-sm text-right">${product.price}</div>
        </div>
      </div>
    </div>
  );
}