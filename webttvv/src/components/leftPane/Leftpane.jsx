import {NavLink} from 'react-router-dom'
import './leftPane.scss'

const LeftPane = () => {
    return ( 
        <div className='left-panel'>
            <div className='container'>
                <header>Icono TTVV</header>
                <nav>
                    <NavLink to='/'>
                        <span>TTVV UAI</span>
                        </NavLink>

                    <NavLink to='/SobreNosotros' >
                        <span>Sobre Nosotros</span>
                        </NavLink>

                    <NavLink to='/RRSS' >
                        <span>Redes Sociales</span>
                        </NavLink>

                    <NavLink to='/Departamentos' >
                        <span>Departamentos</span>
                        </NavLink>

                    <NavLink to='/InSitu' >
                        <span>Trabajos in Situ</span>
                        </NavLink>
                    <button className='inscripcion'>
                        <span>Apoyanos!</span>
                    </button>
                </nav>
                
                <footer>
                    <div>
                        <button className='photo'> </button>
                        <img alt='user'
                            src=''/> 
                    </div>
                    <div>

                    </div>
                    
                </footer>
            </div>
            
        </div>
    )
}
export default LeftPane;