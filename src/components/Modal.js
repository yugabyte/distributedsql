import React, { useEffect, useState } from 'react'
import Speaker from './Speaker'
const featuredSpeakers = require('../data/data.json')

const Modal = ({ title, speakers, description, onHide }) => {
    const [showContent, setShowContent] = useState(false)
    useEffect(() => {
        setShowContent(true)
    }, [])

    useEffect(() => {
        if (showContent) {
            setTimeout(() => {
                document.getElementById('modal-content').classList.add('visible')
            }, 300);
        }
    }, [showContent])

    const handleClick = (e) => {
        if (e.target.classList.contains('modal-background') ||
         e.target.classList.contains('modal-close')) {
            onHide()
            setShowContent(false)
        }
    }
    return (
        <div className="modal-background" onClick={handleClick}>
            <div id="modal-content" className={showContent ? "modal expand" : "modal"}>
                <div className="modal-close" onClick={handleClick}></div>
                <h3>{title}</h3>
                {speakers && speakers.length &&
                    <div className="speaker-list">
                        Talk given by: {speakers.map(s => featuredSpeakers[s].speakerName).join(', ')}
                    </div>
                }
                <p className="text" dangerouslySetInnerHTML={{__html: description}}></p>
            </div>
        </div>
    );
}

export default Modal