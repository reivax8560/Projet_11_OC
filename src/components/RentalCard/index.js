import { Link } from 'react-router-dom'
import './RentalCard.scss'

function RentalCard({ id, cover, title }) {
    return (
        <li className="card">
            <Link to={'location/' + id} className="card__link">
                <img src={cover} alt={title} className='card__img' />
                <p className='card__txt'>{title}</p>
            </Link>
        </li>

    )
}

export default RentalCard