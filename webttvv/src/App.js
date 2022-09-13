import {BrowserRouter,Route, Routes} from 'react-router-dom';
import { LeftPane,Inicio,Sobrenosotros,Departamentos,InSitu,RRSS,Inscripciones } from './components';


import './App.scss';


const App = () =>{
  return (
      <BrowserRouter>
        <div className="app">
          <LeftPane />
          <Routes>
            <Route path='/' exact element={<Inicio />}/>
            <Route path='/Sobrenosotros' element={<Sobrenosotros />} />
            <Route path='/RRSS' element={<RRSS/>}/>
            <Route path='/Departamentos' element={<Departamentos/>} />
            <Route path='/InSitu' element={<InSitu/>}/>
            <Route path='/Inscripciones' element={<Inscripciones/>}/>
          </Routes>
          <div className='right-pane'>Noticias eventos/ Activos</div>
        </div>
        
      </BrowserRouter>
  );
}


export default App;
 



