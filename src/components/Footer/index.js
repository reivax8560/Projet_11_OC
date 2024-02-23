import './Footer.scss'
import letter1 from './../../assets/1.svg'
import letter2 from './../../assets/2.svg'
import letter3 from './../../assets/3.svg'
import letter4 from './../../assets/4.svg'

function Footer() {
    return (
        <div className="footer">
            <div>
                <img className='l1' src={letter1} alt='lettre K' />
                <img className='l2' src={letter2} alt='lettre A' />
                <img className='l3' src={letter3} alt='lettre S' />
                <img className='l4' src={letter4} alt='lettre A' />
            </div>
            <span className='footer__text'>© 2020 Kasa. All rights reserved</span>
        </div>
    )
}

export default Footer