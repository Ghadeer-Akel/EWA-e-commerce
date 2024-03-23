import ProductDetails from '../components/ProductDetails/ProductDetails';
import {ProductProvider} from '../contexts/ProductContext';

const Details = () => {
  return (
    <ProductProvider>
      <div className="detail-page">
        <ProductDetails />
      </div>
    </ProductProvider>
  );
};

export default Details;
