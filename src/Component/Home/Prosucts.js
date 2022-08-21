import React from "react";
import { Link } from "react-router-dom";
import useProduct from "../Hooks/useProduct";
import Product from "./Product/Product";

const Prosucts = () => {
  const [products] = useProduct();
  
  const slicePeoducts = products.slice(0,3);

  return (
    <div className="lg:px-12">
      <h4 className="text-5xl py-4 text-center">Products</h4>

      <div
        className="container-fluid pt-5 pb-4"
        style={{ backgroundColor: "#F9FBFA" }}
      >
        <div className=" ">
          <div className=" grid  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 justify-items-center">
            {slicePeoducts.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
          <div className=" pt-8 text-center">
            <Link to="/product">
              <button className="btn text-white  ">
                See All Products
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prosucts;
