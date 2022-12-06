

import 'bootstrap/dist/css/bootstrap.min.css';


import './App.scss';

import NavbarComp from './components/Navbar/NavbarComp';
import IndividualIntervalsExample from './components/Pages/Home/InSitu/Carousel/CarouselComp'
import Footers from './components/Navbar/Footers';
import Departamentos from './components/Pages/Home/Departamentos/Departamentos';
import SobreNosotros from './components/Pages/Home/SobreNosotros/SobreNosotros';
import Donaciones from './components/Donaciones/donaciones';
import Integrantes from './components/Integrantes/integrantes';
import InSitu from './components/Pages/Home/InSitu/InSitu';
import {BrowserRouter,Navigate, Route, Routes} from 'react-router-dom';
import Inicio from './components/Pages/Home/Inicio/Inicio';
import Inscripciones from './components/Pages/Home/Inscripciones/Inscripciones';

const App = () =>{
  return (
      
        <div className="app">
          <BrowserRouter>
          
            <Routes>
              <Route path='/' element={<NavbarComp/>}>
                <Route index element={<Inicio/>}/>
                <Route path='/Departamentos' element={<Departamentos/>}/>
                <Route path='/InSitu' element={<InSitu/>}/>
                <Route path='/Inscripciones' element={<Inscripciones/>}/>
                <Route path='*' element={<Navigate replace to='/'/>}/>
                
              </Route>
              
            </Routes>
          
          
          </BrowserRouter>

        
        </div>
        
  );
}


export default App;
 



