import { useEffect, useState } from 'react';

const useProduct = () => {
    const [products , setProduct] = useState([]);

    useEffect(() =>{
        fetch('https://warm-wave-77383.herokuapp.com/product')
        .then((res) => res.json())
        .then((data) => {
            setProduct(data)
        });
    },[]);
    return [products, setProduct]
};

export default useProduct;