import React from 'react';
import Product from '../Home/Product/Product';
import useProduct from '../Hooks/useProduct';

const AllProduct = () => {
    const [products] = useProduct();
    return (
        <div className="mt-12 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 justify-items-center">
          {products.map((product) => (
              <Product key={product.id} product={product}></Product>
            ))}
        </div>
    );
};

export default AllProduct;