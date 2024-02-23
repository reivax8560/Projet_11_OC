import './Slideshow.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

function Slideshow({ currentPicture, imgIndex, setImgIndex, totalImg }) {

    function nextPicture() {
        imgIndex < totalImg - 1 ? setImgIndex(imgIndex + 1) : setImgIndex(0)
    }
    function prevPicture() {
        imgIndex > 0 ? setImgIndex(imgIndex - 1) : setImgIndex(totalImg - 1)
    }

    return (
        <div className='slideshow'>
            <img src={currentPicture} alt={`${imgIndex + 1}`} className='slideshow__img' />
            {/* /////////////// affichage chevrons et N° de photo uniquement si plusieurs photos ///////////////*/}
            {totalImg > 1 &&
                <div>
                    <FontAwesomeIcon icon={faChevronRight} className='slideshow__chevronRight' onClick={nextPicture} />
                    <FontAwesomeIcon icon={faChevronLeft} className='slideshow__chevronLeft' onClick={prevPicture} />
                    <p className='slideshow__number'>{imgIndex + 1}/{totalImg}</p>
                </div>

            }
        </div>
    )
}

export default Slideshow