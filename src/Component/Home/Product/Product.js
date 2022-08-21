import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({setOrder,product}) => {
  const navigate = useNavigate();
  
  const navigateToDetail = (id,setOrder,product) => {
    navigate(`/product/${id}`);
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={product.img}
          alt={product.name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.description}</p>
        <div className="card-actions justify-center pt-4 ">
          <button onClick={() => navigateToDetail(product._id , setOrder ,product)} className="btn text-white w-full">Go To Product</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
