import './Collapse.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function Collapse({ title, className, children }) {

    const [contentState, setContentState] = useState('close')
    const [chevronClass, setChevronClass] = useState('chevron')
    const [contentClass, setContentClass] = useState('wrapper')

    const toggle = () => {
        if (contentState === 'close') {
            setContentState('open')
            setChevronClass('chevron open')
            setContentClass('wrapper open')
        } else {
            setContentState('close')
            setChevronClass('chevron close')
            setContentClass('wrapper')
        }
    }

    return (
        <div className={className}>
            <div className='titleBox' onClick={toggle} >
                <p className='titleBox__title'>{title}</p>
                <FontAwesomeIcon icon={faChevronUp} className={chevronClass} />
            </div>
            <div className={contentClass}>
                <div>
                    <div className="content">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collapse


