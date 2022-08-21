import React from 'react';
import useProduct from '../../Hooks/useProduct';

const ManageProducts = () => {
    const [products , setProduct] = useProduct()

const DeleteBtn = (id) => {
  const proceed = window.confirm("Are you sure you want to delete");
  if (proceed) {
    const url = `https://warm-wave-77383.herokuapp.com/product/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("sucess", data);
        const remaing = products.filter((item) => item._id !== id);
        setProduct(remaing);
      });
  }
};




    return (
        <div className="mt-12 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 justify-items-center">
          {products.map((product, index) => (
             <div className="card  bg-base-100 shadow-xl">
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
                 <button onClick={() => DeleteBtn(product._id)} className="btn text-white w-full">Delete Product</button>
               </div>
             </div>
           </div>
          ))}
          </div>
    );
};

export default ManageProducts;