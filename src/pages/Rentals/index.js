import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './Rentals.scss'
import { useParams } from 'react-router-dom'
import datas from './../../datas.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown, faStar } from '@fortawesome/free-solid-svg-icons'

function Rentals() {

    const { id } = useParams()
    const currentRental = datas.find((element) => element.id === id)

    function generateStars() {
        let output = []
        for (let index = 0; index < 5; index++) {
            if (index < currentRental.rating) {
                output.push(<FontAwesomeIcon icon={faStar} className='tags-container__star' />)  // class red
            }
            else {
                output.push(<FontAwesomeIcon icon={faStar} className='tags-container__star' />)  // class grey
            }
        }
        return output
    }



    return (
        <div className="rentals">

            <Header></Header>

            <div className='lightbox'>
                <img src={currentRental.pictures[0]} alt=" " className='lightbox__img' />
            </div>

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

            <div className='tags-container'>
                <div className='tags-container__tags'>
                    {currentRental.tags.map((tag) =>
                        <p key={tag} className='tags-container__tag'>{tag}</p>
                    )}
                </div>
                <div className='tags-container__rating'>
                    {generateStars()}
                </div>
            </div>

            <div className='description-container'>
                <div className='description-container__description'>
                    Description
                    <FontAwesomeIcon icon={faChevronUp} className='description-container__icon-up' />
                    <FontAwesomeIcon icon={faChevronDown} className='description-container__icon-down' />
                    <div className='description-container__detail' ></div>
                </div>
                <div className='description-container__equipment'>Équipements</div>
            </div>

            <Footer></Footer>
        </div>
    )
}

export default Rentals