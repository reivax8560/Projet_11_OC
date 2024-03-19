import datas from './../../datas.json'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import RentalCard from '../../components/RentalCard'
import Banner from '../../components/Banner'
import './Home.scss'
import bannerImg from './../../assets/banner_home.jpg'

function Home() {

    return (
        <div className="home">
            <div className='home-main-wrapper'>
                <Header />
                <Banner text='Chez vous, partout et ailleurs' picture={bannerImg} />
                <div className='gallery'>
                    <ul className='gallery__ul'>
                        {datas.map(({ id, cover, title }) =>
                            <li key={id} className='div-card'>
                                <RentalCard id={id} cover={cover} title={title} />
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home