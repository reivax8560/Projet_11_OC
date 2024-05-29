import Header from "../../components/Header"
import Footer from "../../components/Footer"
import './error.scss'
import { useNavigate } from "react-router-dom"

function Error() {

    const navigate = useNavigate()

    return (
        <div className="error">
            <div className="error-main-wrapper">
                <Header></Header>
                <span className="error-code">404</span>
                <div className="error-msg-box">
                    <span className="error-msg">Oups! La page que vous demandez n'existe pas.</span>
                </div>
                <div className="error-link" onClick={() => navigate('/')}>Retourner sur la page d’accueil</div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Error