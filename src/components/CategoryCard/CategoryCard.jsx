import {Link} from 'react-router-dom';
import './CategoryCard.css';
import {motion} from 'framer-motion';
import {useProduct} from '../../contexts/ProductContext';

const CategoryCard = ({category}) => {
  const {filterProductsByCategory} = useProduct ();
  return (
    <motion.div
      className="category-card"
      initial={{opacity: 0, scale: 0.7}}
      animate={{opacity: 1, scale: 1}}
      transition={{duration: 2}}
      onClick={e => filterProductsByCategory (category.id)}
    >
      <h4 className="category-name" value={category.id}>{category.name}</h4>
    </motion.div>
  );
};

export default CategoryCard;
