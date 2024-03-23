import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

const useGetProduct = () => {
  const [product, setProducts] = useState ([]);
  const [loading, setLoading] = useState (false);

  const {id} = useParams ();
  console.log (product);

  const getProduct = async id => {
    try {
      setLoading (false);
      const res = await fetch (`https://fakestoreapi.com/products/${id}`);

      if (res.ok) {
        const data = await res.json ();
        setProducts (data);
        setLoading (false);
      }
    } catch (error) {
      console.error (error);
    }
  };

  useEffect (() => {
    getProduct (id);
  }, []);
  return {product, loading};
};

export default useGetProduct;
