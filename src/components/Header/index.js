import { NavLink } from 'react-router-dom'
import './Header.scss'
import logo from './../../assets/logo.svg'

function Header() {

    return (
        <div className="header">
            <img className='header__logo' src={logo} alt='logo kasa' />
            <nav>
                <ul className='header__navbar'>
                    <li>
                        <NavLink to="/" className='header__link'>
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/a-propos" className='header__link'>
                            À propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header