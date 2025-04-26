
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Product from './Pages/Product';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import Item from './Pages/Item';


function App() {
  return (

 <BrowserRouter>
 <Routes>
<Route path='/'  element={<Home/>} /> 
<Route path='/product'  element={<Product/>} /> 
<Route path='/contact'  element={<Contact/>} /> 
<Route path='/blog'  element={<Blog/>} /> 
<Route path='/item/:id'  element={<Item/>} /> 

 </Routes>
 </BrowserRouter>

  ); 
}

export default App;
