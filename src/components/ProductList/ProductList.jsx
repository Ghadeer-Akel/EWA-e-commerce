import {useProduct} from '../../contexts/ProductContext';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css';

const ProductList = () => {
  const {filteredProducts , loading} = useProduct ();
  return (
    <div className="product-list">
    {loading?<p>Loading...</p>:(
      <>
      {filteredProducts.map ((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
      </>

    )}
    </div>
  );
};

export default ProductList;
