import {NavLink} from 'react-router-dom'
import './leftPane.scss'

const LeftPane = () => {
    return ( 
        <div className='left-panel'>
            <div className='container'>
                <header>Icono TTVV</header>
                <nav>
                    <NavLink to='/'>TTVV UAI</NavLink>
                    <NavLink to='/SobreNosotros' >Sobre Nosotros</NavLink>
                    <NavLink to='/RRSS' >Redes Sociales</NavLink>
                    <NavLink to='/Departamentos' >Departamentos</NavLink>
                    <NavLink to='/InSitu' >Trabajos in Situ</NavLink>
                </nav>
            </div>
            
        </div>
    )
}
export default LeftPane;