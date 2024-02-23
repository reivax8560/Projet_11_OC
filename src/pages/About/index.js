import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Collapse from '../../components/Collapse'
import './About.scss'
import bannerImg from './../../assets/banner_about.jpg'
import { textFiab, textResp, textServ, textSecu } from './../../about_datas'

function About() {
    return (
        <div className="about">
            <div className='about-main-wrapper'>
                <Header />
                <Banner picture={bannerImg} />
                <Collapse title='Fiabilité' className="collapse-about">
                    {textFiab}
                </Collapse>
                <Collapse title='Respect' className="collapse-about">
                    {textResp}
                </Collapse>
                <Collapse title='Service' className="collapse-about">
                    {textServ}
                </Collapse>
                <Collapse title='Sécurité' className="collapse-about">
                    {textSecu}
                </Collapse>
            </div>
            <Footer />
        </div>
    )
}

export default About