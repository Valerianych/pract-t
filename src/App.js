import { Route } from 'react-router-dom';
import Slider from './components/Slider/Slider';
import Advantages from './components/advantages/Advantages';
import './style/main.css'
import AboutUs from './components/about us/AboutUs';
import Services from './components/services/Services';
import Rent from './components/rent/Rent';
import TwoButton from './components/twobutton/TwoButton';

function App() {
  return (
    <div className="App">
      <Slider />
      <Advantages />
      <AboutUs />
      <Services />
      <Rent />
      <TwoButton />
    </div>
  );
}

export default App;
