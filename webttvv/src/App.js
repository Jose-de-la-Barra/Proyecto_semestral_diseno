import {BrowserRouter,Route, Routes} from 'react-router-dom'
import { LeftPane } from './components';
import { Inicio} from './components/pages/Inicio'
import { Sobrenosotros} from './components/pages/sobrenosotros'

import './App.scss';


const App = () =>{
  return (
      <BrowserRouter>
        <div className="app">
          <LeftPane />

          <Routes>
            <Route path='/' exact element={<Inicio />}/>
            <Route path='sobrenosotros' element={<sobrenosotros />} />
            <Route path='/RRSS' >Redes Sociales</Route>
            <Route path='/Departamentos' >Departamentos</Route>
            <Route path='/InSitu' >Trabajos in Situ</Route>
            

          </Routes>
          <div className='right-pane'>Panel Derecho</div>
        </div>
        
      </BrowserRouter>
  );
}


export default App;
 



