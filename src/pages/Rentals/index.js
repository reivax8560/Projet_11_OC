import datas from './../../datas.json'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './Rentals.scss'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Collapse from '../../components/Collapse'
import Slideshow from './../../components/Slideshow'

function Rentals() {
    ////////////////////////////////////////////////////////// récupération du logement en cours
    const { id } = useParams()
    const currentRental = datas.find((element) => element.id === id)
    ////////////////////////////////////////////////////////// création des étoiles du rating
    const starsArray = []
    for (let i = 0; i < 5; i++) {
        i < currentRental.rating ? starsArray.push('pink star') : starsArray.push('grey star')
    }
    ////////////////////////////////////////////////////////// données du slideshow
    const totalImg = currentRental.pictures.length
    const [imgIndex, setImgIndex] = useState(0)
    let currentPicture = currentRental.pictures[imgIndex]
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    return (
        <div className="rentals">
            <div className='rentals-main-wrapper'>
                <Header />
                <Slideshow currentPicture={currentPicture} imgIndex={imgIndex} setImgIndex={setImgIndex} totalImg={totalImg} />
                {/* //////////////// BLOC NOM / LOCALISATION / PROPRIETAIRE //////////////////*/}
                <div className='title-container'>
                    <div className='title-container__title-box'>
                        <p className='title-container__title'>{currentRental.title}</p>
                        <p className='title-container__location'>{currentRental.location}</p>
                    </div>
                    <div className='title-container__host-box'>
                        <p className='title-container__host-name'>{currentRental.host.name}</p>
                        <img src={currentRental.host.picture} alt="hp" className='title-container__host-picture' />
                    </div>
                </div>
                {/* ///////////////////// BLOC TAGS / RATING ///////////////////////*/}
                <div className='tags-container'>
                    <div className='tags-container__tags'>
                        {currentRental.tags.map((tag, index) =>
                            <p key={index} className='tags-container__tag'>{tag}</p>
                        )}
                    </div>
                    <div className='tags-container__rating'>
                        {starsArray.map((element, index) =>
                            element === 'pink star' ?
                                <FontAwesomeIcon icon={faStar} key={index} className='tags-container__rating--pink-star' />
                                :
                                <FontAwesomeIcon icon={faStar} key={index} className='tags-container__rating--grey-star' />
                        )}
                    </div>
                </div>
                {/* //////////////// BLOC DESCRIPTION / EQUIPEMENT //////////////////*/}
                <div className='description-container'>
                    <Collapse title='Description' className="collapse-rentals">
                        {currentRental.description}
                    </Collapse>
                    <Collapse title='Équipement' className="collapse-rentals">
                        <ul className='collapse__ul'>
                            {currentRental.equipments.map((item, index) => (
                                <li key={index} className='collapse__li'>{item}</li>
                            ))}
                        </ul>
                    </Collapse>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Rentals