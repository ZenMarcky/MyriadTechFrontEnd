
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
<Route path='/' exact={true} element={<Home/>} /> 
<Route path='/product' exact={true} element={<Product/>} /> 
<Route path='/contact' exact={true} element={<Contact/>} /> 
<Route path='/blog' exact={true} element={<Blog/>} /> 
<Route path='/item/:id' exact={true} element={<Item/>} /> 

 </Routes>
 </BrowserRouter>

  ); 
}

export default App;
