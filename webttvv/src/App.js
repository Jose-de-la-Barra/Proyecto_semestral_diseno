import {BrowserRouter,Route, Routes} from 'react-router-dom'
import { LeftPane } from './components';
import './App.scss';

const App = () =>{
  return (
      <BrowserRouter>
        <div className="app">
          <LeftPane />
          <Routes>
            <Route path='/' exact>TTVV UAI</Route>
            <Route path='/SobreNosotros' >Sobre Nosotros</Route>
            <Route path='/RRSS' >Redes Sociales</Route>
            <Route path='/Departamentos' >Departamentos</Route>
            <Route path='/InSitu' >Trabajos in Situ</Route>
            <Route path='/' >Home</Route>
          </Routes>
          <div>RightPanel</div>
        </div>
      </BrowserRouter>
  );
}


export default App;
 



