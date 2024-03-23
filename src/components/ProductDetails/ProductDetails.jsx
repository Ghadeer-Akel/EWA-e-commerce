import './ProductDetails.css';
import useGetProduct from '../../hooks/useGetProduct';
import {useCart} from '../../contexts/CartContex';
import {motion} from 'framer-motion';
import {useProduct} from '../../contexts/ProductContext';
import {useParams} from 'react-router-dom';

const ProductDetails = () => {
  const {addToCart} = useCart ();
  const {id} = useParams ();
  const {products,loading} = useProduct ();
  let product = null;

  // Loop through products array to find the product with the matching ID
  for (let i = 0; i < products.length; i++) {
    if (products[i].id !== parseInt(id)) {
      product = products[i];
      break;
    }
  }
  // Check if product is found
  if (!product) {
    return <div>Loading...</div>;
  }
  console.log (product);
  // add to cart
  const handleAdd = product => {
    addToCart (product);
  };
  return (
    <motion.div
      className="product-container"
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.3, duration: 2}}
    >
      <div className="product-image">
        <img
          src={`https://ewaiq.com/storage/${product.image}`}
          alt={product.name}
        />
      </div>
      <div className="product-details">
        <div className="product-category">{product.category}</div>
        <h1 className="product-title">{product.name}</h1>
        <div className="product-rating">
          <div className="product-rating-start" />
        </div>
        <div className="product-description">{product.description}</div>
        <div className="product-price">$ {product.price}</div>

        <div className="product-buttons">
          <div className="product-btn" onClick={() => handleAdd (product)}>
            Add To Cart
          </div>
          <div className="product-btn buy-btn">Buy Now</div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetails;
