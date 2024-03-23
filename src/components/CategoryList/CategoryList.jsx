import { useProduct } from "../../contexts/ProductContext";
import useGetGategories from "../../hooks/useGetGategories"
import CategoryCard from "../CategoryCard/CategoryCard"
import './CategoryList.css'

const CategoryList = () => {
  const {categories,loading }= useProduct();
  return (
    <div className="category-list">
    
    {loading?<></>:
    categories.map((category)=>(<CategoryCard key={category.id} category={category}/>))}
   
    </div>
  )
}

export default CategoryList