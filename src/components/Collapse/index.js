import './Collapse.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

function Collapse({ title, className, children }) {


    const [contentState, setContentState] = useState('close')
    const [chevronClass, setChevronClass] = useState('chevron')
    const [contentClass, setContentClass] = useState('content')



    const toggle = () => {
        if (contentState === 'close') {
            setContentState('open')
            setChevronClass('chevron open')
            setContentClass('content open')
        } else {
            setChevronClass('chevron close')
            setContentClass('content close')
            setContentState('close')
        }

    }
    return (
        <div className={className}>
            <div className='titleBox' onClick={toggle} >
                <p className='titleBox__title'>{title}</p>
                <FontAwesomeIcon icon={faChevronUp} className={chevronClass} />
            </div>
            <div className={contentClass}>
                {children}
            </div>
            {/* <div className={contentClass}>
                {contentState === 'open' && children}
            </div> */}
        </div>
    )
}

export default Collapse