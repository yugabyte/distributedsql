import React, { useEffect, useState } from 'react'
import Speaker from './Speaker'
const featuredSpeakers = require('../data/data.json')

const Modal = ({ title, time, speakers, speakerPictures, description, onHide, footer }) => {
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

    const d = new Date(time)
    const dateTime = `${d.toLocaleString('en-us', { weekday: 'short' })}, ${d.toLocaleString('en-us', { month: 'short' })} ${d.getDay()} at ${d.toLocaleTimeString('en-us', { hour12: true, hour: '2-digit', minute: '2-digit', timeZoneName: 'short' })}`
    return (
        <div className="modal-background" onClick={handleClick}>
            <div id="modal-content" className={showContent ? "modal expand" : "modal"}>                
                <div className="modal-close" onClick={handleClick}></div>
                <div className="modal-body">
                    <h3>{title}</h3>
                    <div>{dateTime}</div>
                    {speakers && speakers.length &&
                        <div className="speaker-list">
                            {speakers.map((s, idx) => (                                
                                <Speaker
                                    key={'modal-s'+featuredSpeakers[s].speakerId}
                                    speakerId={featuredSpeakers[s].speakerId}
                                    speakerName={featuredSpeakers[s].speakerName}
                                    speakerImage={speakerPictures[idx].childImageSharp.fluid.src}
                                    speakerPosition={featuredSpeakers[s].speakerPosition}
                                    speakerCompany={featuredSpeakers[s].speakerCompany}
                                    borderColor={featuredSpeakers[s].borderColor}
                                    orientation="landscape"
                                    size="small"
                                />)
                            )}
                        </div>
                    }
                    <p className="text" dangerouslySetInnerHTML={{__html: description}}></p>
                </div>
                <div className="modal-footer">
                    {footer}
                </div>
            </div>
        </div>
    );
}

export default Modal