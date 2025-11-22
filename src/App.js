import './App.css';
import FeaturedProducts from './Components/FeaturedProducts/FeaturedProducts';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Checkout from './Components/CheckoutPage/Checkout';
import Footer from './Components/Footer/Footer';
import Index from './Components/Index/Index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Header/>

      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
