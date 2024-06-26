import {TbPlus} from 'react-icons/tb';
import './ProductCard.css';
import {useCart} from '../../contexts/CartContex';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

const ProductCard = ({product}) => {
  const {addToCart} = useCart ();

  const handleAdd = product => {
    addToCart (product);
  };
  return (
    <motion.div
      className="card-container"
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.3, duration: 2}}
    >
      <Link to={`/product/${product.id}`}>

        <div className="card-image">
          <img src={`https://ewaiq.com/storage/${product.image}`} alt={product.name}  />
        </div>
      </Link>

      <div className="card-details">
        <h4 className="card-title">{product.name}</h4>
        <div className="card-category">{product.categories.name}</div>

        <div className="card-flex">
          <div className="card-price">{product.price}$</div>
          <div className="card-button" onClick={() => handleAdd (product)}>
            <TbPlus />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
