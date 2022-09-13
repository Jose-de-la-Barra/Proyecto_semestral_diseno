import {NavLink} from 'react-router-dom'
import './leftPane.scss'

const LeftPane = () => {
    return ( 
        <div className='left-panel'>
            <div className='container'>
                <header>Icono TTVV</header>
                <nav>
                    <NavLink path='/'>TTVV UAI</NavLink>
                    <NavLink path='/SobreNosotros' >Sobre Nosotros</NavLink>
                    <NavLink path='/RRSS' >Redes Sociales</NavLink>
                    <NavLink path='/Departamentos' >Departamentos</NavLink>
                    <NavLink path='/InSitu' >Trabajos in Situ</NavLink>
                </nav>
            </div>
            
        </div>
    )
}
export default LeftPane;