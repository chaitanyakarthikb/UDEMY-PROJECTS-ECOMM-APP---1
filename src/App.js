import './App.css';
import FeaturedProducts from './Components/FeaturedProducts/FeaturedProducts';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <FeaturedProducts/>

     
    </div>
  );
}

export default App;
