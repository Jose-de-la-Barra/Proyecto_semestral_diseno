

import 'bootstrap/dist/css/bootstrap.min.css';


import './App.scss';
import IndividualIntervalsExample from './components/Carousel/CarouselComp';
import NavScrollExample from './components/Navbar/NavbarComp';
import Footer from './components/Footer/Footer';


const App = () =>{
  return (
      
        <div className="app">
          <NavScrollExample/>
          <IndividualIntervalsExample/>
          <Footer></Footer>
        </div>
        
  );
}


export default App;
 



