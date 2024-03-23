import {createContext, useContext, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

const ProductContext = createContext ();

export const ProductProvider = ({children}) => {
  const [categories, setCategories] = useState ([]);
  const [products, setProducts] = useState ([]);
  const [filteredProducts, setFilteredProducts] = useState (products);
  const [thereProduct, setThereProduct] = useState ();

  useEffect (() => {
    // Fetch categories
    fetch ('https://ewaiq.com/public/api/v1/categories/featured')
      .then (response => response.json ())
      .then (data => {
        setCategories (data.data);
      })
      .catch (error => {
        console.error ('Error fetching categories:', error);
      });

    // Fetch featured products
    fetch ('https://ewaiq.com/public/api/v1/products/featured')
      .then (response => response.json ())
      .then (data => {
        setProducts (data.data.data);
        setFilteredProducts (data.data.data); // Initialize filtered products with all products
      })
      .catch (error => {
        console.error ('Error fetching products:', error);
      });
  }, []);

  const filterProductsByCategory = categoryId => {
    setThereProduct (false);
    if (categoryId === 'all') {
      setFilteredProducts (products);
    } else {
      const filtered = products.filter (product =>
        product.categories.find (category => category.id == categoryId)
      );
      setFilteredProducts (filtered);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        categories,
        filteredProducts,
        filterProductsByCategory,
        thereProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext (ProductContext);
