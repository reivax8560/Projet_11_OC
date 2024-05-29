import './Banner.scss'

function Banner({ text, picture }) {

    return (
        <div className='bannerBg'>
            {text &&
                <div className='bannerBg__div-text'>
                    <p className='bannerBg__text'>{text}</p>
                </div>
            }
            <img src={picture} alt="paysage" className='bannerBg__img' />
        </div>
    )
}

export default Banner