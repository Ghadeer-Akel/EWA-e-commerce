import {TbPlus} from 'react-icons/tb';
import './ProductCard.css';
import {useCart} from '../../contexts/CartContex';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

const ProductCard = ({product}) => {
  //   const[ewa,setEwa]=useState();

  //   useEffect(()=>{
  //     fetch('https://ewaiq.com/public/api/v1/categories/featured')
  //     .then((res)=>res.json())
  //     .then((data)=>setEwa(data))
  //   },[]);
  // console.log(ewa.name);
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
          <img src={product.image} alt="product image" />
        </div>
      </Link>

      <div className="card-details">
        <h4 className="card-title">{product.title}</h4>
        <div className="card-category">{product.category}</div>

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
