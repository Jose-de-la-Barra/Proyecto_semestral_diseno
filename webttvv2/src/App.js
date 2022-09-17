

import 'bootstrap/dist/css/bootstrap.min.css';


import './App.scss';
import IndividualIntervalsExample from './components/Carousel/CarouselComp';
import NavScrollExample from './components/Navbar/NavbarComp';


const App = () =>{
  return (
      
        <div className="app">
          <NavScrollExample/>
          <IndividualIntervalsExample/>
        </div>
        
  );
}


export default App;
 



