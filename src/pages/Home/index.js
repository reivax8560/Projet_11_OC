import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './Home.scss'
import datas from './../../datas.json'
import RentalCard from '../../components/RentalCard'

function Home() {

    return (
        <div className="home">
            <Header></Header>
            <div className='banner'>
                <p className='banner__text'>Chez vous, partout et ailleurs</p>
            </div>
            <div className='gallery'>
                <ul className='gallery__ul'>
                    {datas.map(({ id, cover, title }) =>
                        <RentalCard id={id} cover={cover} title={title} />
                    )}
                </ul>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Home