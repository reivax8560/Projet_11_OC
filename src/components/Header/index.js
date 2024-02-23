import { Link } from 'react-router-dom'
import './Header.scss'
import logo from './../../assets/logo.svg'

function Header() {
    return (
        <div className="header">
            <img className='header__logo' src={logo} alt='logo kasa' />
            <nav>
                <ul className='header__navbar'>
                    <li>
                        <Link to="/" className='header__link'>Accueil</Link>
                    </li>
                    <li>
                        <Link to="/a-propos" className='header__link'>À propos</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header