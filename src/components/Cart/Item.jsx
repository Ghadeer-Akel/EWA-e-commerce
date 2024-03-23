import {TbMinus, TbPlus, TbX} from 'react-icons/tb';
import{motion} from 'framer-motion'

const Item = ({item,handleRemove,handleAdd,handleRemoveQuantity }) => {
  return (
    <motion.div className="item-details"
     initial={{opacity:0, y:100}}
    animate={{opacity:1,y:0}}
    transition={{delay:0.3,duration:2}}>
      <div className="item-info">
        <div className="item-image">
          <img src={item.image} alt="item image" />
        </div>
        <div className="item-title">{item.title}</div>
      </div>
      <div className="item-info">
        <div className="item-unit-price">${item.price}</div>
        <div className="item-quantity">
          <TbMinus className='plus-btn' onClick={()=>{handleRemoveQuantity(item.id)}}/> {item.quantity} <TbPlus className='mins-btn' onClick={()=>{handleAdd(item)}}/>
        </div>
        <div className="item-total-price">${item.price*item.quantity}</div>
        <div className="item-remove" onClick={()=>{handleRemove(item.id)}}>
          <TbX />
        </div>
      </div>

    </motion.div>
  );
};

export default Item;
