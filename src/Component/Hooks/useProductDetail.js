import { useEffect, useState } from 'react';

const useProductDetail = (id) => {
    const [product, setProduct] = useState({});
    useEffect(() => {
      fetch(`https://warm-wave-77383.herokuapp.com/product/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
        });
    }, []);
    return [product, setProduct];
};

export default useProductDetail;