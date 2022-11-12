

import 'bootstrap/dist/css/bootstrap.min.css';


import './App.scss';
import IndividualIntervalsExample from './components/Carousel/CarouselComp';
import NavScrollExample from './components/Navbar/NavbarComp';
import Footer from './components/Footer/Footer';
import Cards from './components/Cards/Cards';
import SobreNosotros from './components/SobreNosotros/SN';
import Donaciones from './components/Donaciones/donaciones';
import Integrantes from './components/Integrantes/integrantes';


const App = () =>{
  return (
      
        <div className="app">
          <NavScrollExample/>
          <IndividualIntervalsExample/>
          <SobreNosotros/>
          <Cards></Cards>
          <Donaciones/>
          <Integrantes/>
          <Footer></Footer>
        </div>
        
  );
}


export default App;
 



