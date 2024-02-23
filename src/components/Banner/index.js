import './Banner.scss'

function Banner({ text, picture }) {

    return (
        <div className='bannerBg'>
            {text && <p className='bannerBg__text'>{text}</p>}
            <img src={picture} alt="paysage" className='bannerBg__img' />
        </div>
    )
}

export default Banner