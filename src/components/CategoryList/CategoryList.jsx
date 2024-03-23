import useGetGategories from "../../hooks/useGetGategories"
import CategoryCard from "../CategoryCard/CategoryCard"
import './CategoryList.css'

const CategoryList = () => {
  const {categories,loading}= useGetGategories();
  return (
    <div className="category-list">
    
    {loading?<></>:
    categories.map((category)=>(<CategoryCard key={category} category={category}/>))}
    </div>
  )
}

export default CategoryList