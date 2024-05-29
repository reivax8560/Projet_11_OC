import datas from './../../datas.json'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './Rentals.scss'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Collapse from '../../components/Collapse'
import Slideshow from './../../components/Slideshow'


function Rentals() {

    const navigate = useNavigate()
    const { id } = useParams()
    const [currentRental, setCurrentRental] = useState({})
    const [starsArray, setStarsArray] = useState([])
    const [totalImg, setTotalImg] = useState(0)
    const [currentPicture, setCurrentPicture] = useState('') // path de l'image
    const [imgIndex, setImgIndex] = useState(0)



    useEffect(() => {
        ////////////////////////////////////////////////////////// récupération du logement en cours
        const _currentRental = datas.find((element) => element.id === id)
        ////////////////////////////////////////////////////////// si aucune donnée => page d'erreur + message URL
        if (!_currentRental) {
            navigate('id_logement_non_trouve')
        }
        else {
            setCurrentRental(_currentRental)
            ////////////////////////////////////////////////////////// création des étoiles du rating
            const _starsArray = []
            for (let i = 0; i < 5; i++) {
                i < _currentRental.rating ? _starsArray.push('pink star') : _starsArray.push('grey star')
            }
            setStarsArray(_starsArray)
            ////////////////////////////////////////////////////////// données du slideshow
            setTotalImg(_currentRental.pictures.length)
            setCurrentPicture(_currentRental.pictures[imgIndex])
        }
    }, [id, imgIndex, navigate])



    return (
        <div className="rentals">
            <div className='rentals-main-wrapper'>
                <Header />
                <Slideshow currentPicture={currentPicture} imgIndex={imgIndex} setImgIndex={setImgIndex} totalImg={totalImg} />

                <div className='info_section'>


                    {/* //////////////// BLOC TITRE / LOCALISATION / TAGS //////////////////*/}
                    <div className='titleAndTags-container'>
                        <div className='titleAndTags-container__title-box'>
                            <p className='titleAndTags-container__title'>{currentRental.title}</p>
                            <p className='titleAndTags-container__location'>{currentRental.location}</p>
                        </div>
                        <div className='titleAndTags-container__tags'>
                            {currentRental.tags && currentRental.tags.map((tag, index) =>
                                <p key={index} className='titleAndTags-container__tag'>{tag}</p>
                            )}
                        </div>
                    </div>
                    {/* ///////////////////// BLOC RATING / HOST ///////////////////////*/}
                    <div className='ratingAndHost-container'>
                        <div className='ratingAndHost-container__rating'>
                            {starsArray.map((element, index) =>
                                element === 'pink star' ?
                                    <FontAwesomeIcon icon={faStar} key={index} className='ratingAndHost-container__rating--pink-star' />
                                    :
                                    <FontAwesomeIcon icon={faStar} key={index} className='ratingAndHost-container__rating--grey-star' />
                            )}
                        </div>
                        <div className='ratingAndHost-container__host-box'>
                            <p className='ratingAndHost-container__host-name'>{currentRental.host?.name}</p>
                            <img src={currentRental.host?.picture} alt="hp" className='ratingAndHost-container__host-picture' />
                        </div>
                    </div>
                </div>

                {/* //////////////// BLOC DESCRIPTION / EQUIPEMENT //////////////////*/}
                <div className='description-container'>
                    <Collapse title='Description' className="collapse-rentals">
                        {currentRental.description}
                    </Collapse>
                    <Collapse title='Équipement' className="collapse-rentals">
                        <ul className='collapse__ul'>
                            {currentRental.equipments && currentRental.equipments.map((item, index) => (
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

