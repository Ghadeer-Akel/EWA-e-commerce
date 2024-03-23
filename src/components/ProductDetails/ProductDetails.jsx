import './ProductDetails.css';
import useGetProduct from '../../hooks/useGetProduct';
import {useCart} from '../../contexts/CartContex';
import {motion} from 'framer-motion';

const ProductDetails = () => {
  const {product} = useGetProduct ();
  const {addToCart} = useCart ();

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
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-details">
        <div className="product-category">{product.category}</div>
        <h1 className="product-title">{product.title}</h1>
        <div className="product-rating">
          <div className="product-rating-start" />
          {/* <span>{product.rating.rate}</span>
          <span>{product.rating.count}</span> */}
        </div>
        <div className="product-description">{product.description}</div>
        <div className="product-price">{product.price}</div>

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
