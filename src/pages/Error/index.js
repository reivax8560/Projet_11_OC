import Header from "../../components/Header"
import Footer from "../../components/Footer"
import './error.scss'
import { Link } from "react-router-dom"

function Error() {

    return (
        <div className="error">
            <div className="error-main-wrapper">
                <Header></Header>
                <span className="error-code">404</span>
                <span className="error-msg">Oups! La page que vous demandez n'existe pas.</span>
                <Link to='/' className="error-link">Retourner sur la page d’accueil</Link>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Error