import './App.css';
import Home from './Component/Home';
import ProductView from './Component/ProductView';
import Cart from './Component/Cart';
import { Route, Routes } from 'react-router-dom';
import React from 'react'
import Chatbot from './Component/chatbot/Chatbot';

const App = () => {
  return (
    // This div and last for chatbot intigration
  <div> 
       <div>
          <Chatbot />
       </div>
       
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product-view' element={<ProductView />} />
      <Route path='/cart' element={<Cart />}/>
    </Routes>
</div>

  );
}

export default App;

