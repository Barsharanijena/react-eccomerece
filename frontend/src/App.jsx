import './App.css'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import ShopCategory from './Pages/ShopCatogory'
import LoginSignup from './Pages/LoginSignup'
import Product from './Pages/Product'
function App() {
  
  return (
   <div>
   <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<ShopCategory/>}/>
      <Route path="/mens" element={<ShopCategory
      category="mens"/>}/>
      <Route path="/womens" element={<ShopCategory
      category="womens"/>}/>
      <Route path="/kids" element={<ShopCategory
      category="kids"/>}/>
      <Route path="/Hampers" element={<ShopCategory
      category="Hampers"/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path=":productId" element={<Product/>}/>
      <Route path = "/cart" element ={<cart/>}/>
      <Route path = "/login" element ={<LoginSignup/>}/>
    </Routes>
   </BrowserRouter>
 
   </div>
  )
}

export default App
