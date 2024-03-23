import {createContext, useContext, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

const ProductContext = createContext ();

export const ProductProvider = ({children}) => {
  const [products, setProducts] = useState ([]);
  const [loading, setLoading] = useState (false);

  const {category} = useParams ();
  // console.log(products);
  const getProducts = async (category) => {
    setLoading(true)
    try {
      let url = 'https://fakestoreapi.com/products';
      if (category) {
        url += `/category/${category}/?limit=4`;
      } 
      else {
        url += '?limited=4';
      }
       await fetch (url)
      .then((respons)=>respons.json())
      .then((data)=>setProducts (data));
    //   if (res.ok) {
    //     setProducts (data);
    //     setLoading (false);
    //   }
    } catch (err) {
      console.error (err);
    } finally {
      setLoading (false);
    }
  };

  useEffect(()=>{
    getProducts(category)
  },[category])
  return (
    <ProductContext.Provider value={{products,loading}}>{children}</ProductContext.Provider>
  );
};

export const useProduct = () => useContext (ProductContext);
