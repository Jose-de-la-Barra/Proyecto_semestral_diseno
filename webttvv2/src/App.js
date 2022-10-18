

import 'bootstrap/dist/css/bootstrap.min.css';


import './App.scss';
import IndividualIntervalsExample from './components/Carousel/CarouselComp';
import NavScrollExample from './components/Navbar/NavbarComp';
import Footer from './components/Footer/Footer';
import Cards from './components/Cards/Cards';
import TituloCards from './components/Cards/TituloCards';


const App = () =>{
  return (
      
        <div className="app">
          <NavScrollExample/>
          <IndividualIntervalsExample/>
          <TituloCards/>
          <Cards></Cards>
          <Footer></Footer>
        </div>
        
  );
}


export default App;
 



