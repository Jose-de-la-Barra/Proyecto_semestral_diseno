

import 'bootstrap/dist/css/bootstrap.min.css';


import './App.scss';

import NavScrollExample from './components/Navbar/NavbarComp';
import IndividualIntervalsExample from './components/Pages/Home/Carousel/CarouselComp'
import Footer from './components/Footer/Footer';
import Departamentos from './components/Pages/Home/Departamentos/Departamentos';
import SobreNosotros from './components/Pages/Home/SobreNosotros/SobreNosotros';
import Donaciones from './components/Donaciones/donaciones';
import Integrantes from './components/Integrantes/integrantes';

import {BrowserRouter,Navigate, Route, Routes} from 'react-router-dom';

const App = () =>{
  return (
      
        <div className="app">
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<NavScrollExample/>}>
                <Route index element={<SobreNosotros/>}/>
                <Route path='/SobreNosotros' element={<SobreNosotros/>}/>
                <Route path='/Departamentos' element={<Departamentos/>}/>
                <Route path='*' element={<Navigate replace to='/'/>}/>
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
        
  );
}


export default App;
 



