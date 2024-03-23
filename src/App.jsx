import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./Pages/Home"
import Cart from "./Pages/Cart"
import Details from "./Pages/Details"

const App = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/category/:category" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/product/:id" element={<Details/>}/>
    </Routes>
    </>
  )
}

export default App