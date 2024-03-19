import { useNavigate } from 'react-router-dom'
import './RentalCard.scss'

function RentalCard({ id, cover, title }) {

    const navigate = useNavigate()

    return (
        <div className="card">
            <div className="card__link" onClick={() => navigate('location/' + id)}>
                <img src={cover} alt={title} className='card__img' />
                <p className='card__txt'>{title}</p>
            </div>
        </div>
    )
}

export default RentalCard