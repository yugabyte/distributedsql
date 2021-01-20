import React, { useEffect, useState } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { navigate } from '@reach/router'
import { useQueryParam } from "gatsby-query-params";
import Select from 'react-select'

import Speaker from './Speaker'
import Modal from './Modal'

import { CLIENT_ID, API_KEY, DISCOVERY_DOCS, SCOPES } from './Confirmation'
import CalendarIcon from '../assets/images/svg/calendar-icon.svg'
const conferenceSchedule = require('../data/conferenceData')
const featuredSpeakers = require('../data/data.json')

const dateOptions = [
  { value: 'jan-20', label: 'Jan 20' },
  { value: 'jan-21', label: 'Jan 21' },
  { value: 'jan-22', label: 'Jan 22' }
];

const EventSchedule = (props) => {
  const [showModal, setShowModal] = useState(false)
  const [eventInfo, setEventInfo] = useState({})

  const handleShowInfo = (e, event) => {
    setEventInfo(event);
    setShowModal(true);
    window.history.pushState(null, 'Event Info', `/schedule?event=${event.id}`);    
  }

  const eventId = useQueryParam("event", null);
  if (eventInfo.id !== eventId) {
    const selectedEvent = conferenceSchedule.flat().find(x => x.id === eventId);
    if (selectedEvent) {
      handleShowInfo(null, selectedEvent);
    }
  }

  const registerButton = <Link to={'/register'} className="btn-rounded">Register</Link>

  return (
    <StaticQuery query={graphql`
    query {
      AashishKapoor1: file(relativePath: { eq: "AashishKapoor.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      AlanCaldera1: file(relativePath: { eq: "AlanCaldera.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      AmeyBanarse1: file(relativePath: { eq: "AmeyBanarse.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      AndyManoske1: file(relativePath: { eq: "AndyManoske.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      AnjulSahu1: file(relativePath: { eq: "AnjulSahu.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      BhavinGandhi1: file(relativePath: { eq: "BhavinGandhi.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      BreneshStanslasFlowerMary1: file(relativePath: { eq: "BreneshStanslasFlowerMary.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      CemAladogan1: file(relativePath: { eq: "CemAladogan.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      CetinYalcinGulec1: file(relativePath: { eq: "CetinYalcinGulec.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      CharlesPretzer1: file(relativePath: { eq: "CharlesPretzer.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ChiragNarang1: file(relativePath: { eq: "ChiragNarang.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      CorneliaDavis1: file(relativePath: { eq: "CorneliaDavis.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      DanZentgraf1: file(relativePath: { eq: "DanZentgraf.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      DhavalJagani1: file(relativePath: { eq: "DhavalJagani.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      DivyaGoel1: file(relativePath: { eq: "DivyaGoel.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      EricPratt1: file(relativePath: { eq: "EricPratt.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      GregHaskins1: file(relativePath: { eq: "GregHaskins.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      JohnForrest1: file(relativePath: { eq: "JohnForrest.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      KarthikRanganathan1: file(relativePath: { eq: "KarthikRanganathan.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      LeonKuperman1: file(relativePath: { eq: "LeonKuperman.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      MichaelJames1: file(relativePath: { eq: "MichaelJames.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      NikhilChandrappa1: file(relativePath: { eq: "NikhilChandrappa.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      PeteDeJoy1: file(relativePath: { eq: "PeteDeJoy.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      PrasadBopardikar1: file(relativePath: { eq: "PrasadBopardikar.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      PraveenKumarPurushothaman1: file(relativePath: { eq: "PraveenKumarPurushothaman.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      QinYu1: file(relativePath: { eq: "QinYu.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      RajibDeb1: file(relativePath: { eq: "RajibDeb.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ShivamArora1: file(relativePath: { eq: "ShivamArora.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ShraddhaAgrawal1: file(relativePath: { eq: "ShraddhaAgrawal.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      TaylorMull1: file(relativePath: { eq: "TaylorMull.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      TobiasMeixner1: file(relativePath: { eq: "TobiasMeixner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      VirajParekh1: file(relativePath: { eq: "VirajParekh.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      CharlotteHamilton1: file(relativePath: { eq: "CharlotteHamilton.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      GrishmaMehta1: file(relativePath: { eq: "GrishmaMehta.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      MichelleBrinich1: file(relativePath: { eq: "MichelleBrinich.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    `}
      render={data => {

        const colourStyles = {
          control: (styles, { isFocused, isSelected }) => ({
            ...styles,
            backgroundColor: '#FFFFFF',
            fontSize: '18px',
            fontWeight: 500,
            height: '50px',
            border: '1px solid #cdd1d5',
            '&:hover': {
              border: '1px solid #FF6E42'
            },
            boxShadow: 'none'
          }),
          option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            return {
              ...styles,
              backgroundColor: isDisabled
                ? null
                : isSelected
                ? '#FF6E42'
                : isFocused
                ? '#d9dbde'
                : null,
              color: isSelected ? '#FFFFFF' : '#080808',
              borderRadius: '0 24px 24px 0',
              fontSize: '18px',
              fontWeight: 500
            }
          }
        }
        return (
          <section id="schedule" className="major">
            <div className="inner">
              <header className="major">
                <h4>Summit Schedule <span>•</span> Virtual Event</h4>
              </header>
              <Select
                options={dateOptions}
                defaultValue={dateOptions[0]}
                className="date-filter"              
                styles={colourStyles}
                isSearchable={false}
                onChange={(ev) => document.getElementById(ev.value).scrollIntoView({behavior: "smooth", block: "start"})}
              />
              <ul className="day-agenda">
                <li>
                  <div className="column-header">
                    <div id="jan-20" className="calendar-date">
                      <div>Jan</div>
                      <strong>20</strong>                  
                    </div>
                    <div className="event-name">
                      Workshop Day<br />
                      10 am to 3 pm IST
                    </div>
                  </div>
                  <div className="card-list">
                    {conferenceSchedule[0].map(event => (
                      <div className="event-card">
                        <div className="event-time">{event.time}</div>
                        {/* <Link to={`/session/${event.id}`}> */}
                          <h4 className="talk-title">{event.talk}</h4>
                        {/* </Link> */}
                        {event.speakers && event.speakers.map(speakerKey => (
                          <Speaker
                            key={featuredSpeakers[speakerKey].speakerId}
                            speakerKey={featuredSpeakers[speakerKey].speakerId}
                            speakerId={featuredSpeakers[speakerKey].speakerId}
                            speakerName={featuredSpeakers[speakerKey].speakerName}
                            speakerImage={data[featuredSpeakers[speakerKey].speakerPicture + '1'] ? data[featuredSpeakers[speakerKey].speakerPicture + '1'].childImageSharp.fluid.src : null}
                            speakerPosition={featuredSpeakers[speakerKey].speakerPosition}
                            speakerCompany={featuredSpeakers[speakerKey].speakerCompany}
                            borderColor={featuredSpeakers[speakerKey].borderColor}
                            orientation="landscape"
                            size="small"
                          />
                        ))}
                        <div className="actions">
                          {event.description && <span className="info-btn" onClick={(e) => handleShowInfo(e, event)}>i</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </li>
                <li>
                  <div className="column-header">
                    <div id="jan-21" className="calendar-date">
                      <div>Jan</div>
                      <strong>21</strong>                  
                    </div>
                    <div className="event-name">
                      Summit Day 1<br />
                      10 am to 3 pm IST
                    </div>
                  </div>
                  <div className="card-list">
                    {conferenceSchedule[1].map(event => (
                      <div className="event-card">                        
                        <div className="event-time">{event.time}</div>
                        {/* <Link to={`/session/${event.id}`}> */}
                          <h4 className="talk-title">{event.talk}</h4>
                        {/* </Link> */}
                        {event.speakers && event.speakers.map(speakerKey => (
                          <Speaker
                            speakerId={featuredSpeakers[speakerKey].speakerId}
                            speakerName={featuredSpeakers[speakerKey].speakerName}
                            speakerImage={data[featuredSpeakers[speakerKey].speakerPicture + '1'] ? data[featuredSpeakers[speakerKey].speakerPicture + '1'].childImageSharp.fluid.src : null}
                            speakerPosition={featuredSpeakers[speakerKey].speakerPosition}
                            speakerCompany={featuredSpeakers[speakerKey].speakerCompany}
                            borderColor={featuredSpeakers[speakerKey].borderColor}
                            orientation="landscape"
                            size="small"
                          />
                        ))}
                        <div className="actions">
                          {event.description && <span className="info-btn" onClick={(e) => handleShowInfo(e, event)}>i</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </li>
                <li>
                  <div className="column-header">
                    <div id="jan-22" className="calendar-date">
                      <div>Jan</div>
                      <strong>22</strong>                  
                    </div>
                    <div className="event-name">
                      Summit Day 2<br />
                      10 am to 3 pm IST
                    </div>
                  </div>
                  <div className="card-list">
                    {conferenceSchedule[2].map(event => (
                      <div className="event-card">
                        <div className="event-time">{event.time}</div>
                        {/* <Link to={`/session/${event.id}`}> */}
                          <h4 className="talk-title">{event.talk}</h4>
                        {/* </Link> */}
                        {event.speakers && event.speakers.map(speakerKey => (
                          <Speaker
                            speakerId={featuredSpeakers[speakerKey].speakerId}
                            speakerName={featuredSpeakers[speakerKey].speakerName}
                            speakerImage={data[featuredSpeakers[speakerKey].speakerPicture + '1'] ? data[featuredSpeakers[speakerKey].speakerPicture + '1'].childImageSharp.fluid.src : null}
                            speakerPosition={featuredSpeakers[speakerKey].speakerPosition}
                            speakerCompany={featuredSpeakers[speakerKey].speakerCompany}
                            borderColor={featuredSpeakers[speakerKey].borderColor}
                            orientation="landscape"
                            size="small"
                          />
                        ))}
                        <div className="actions">
                          {event.description && <span className="info-btn" onClick={(e) => handleShowInfo(e, event)}>i</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
            {showModal &&
              <Modal title={eventInfo.talk}
                description={eventInfo.description}
                speakers={eventInfo.speakers}
                speakerPictures={eventInfo.speakers.map(s => data[s + '1'])}
                time={eventInfo.start}
                onHide={() => {
                  setShowModal(false)
                  window.history.replaceState(null, 'Schedule', '/schedule');
                }}
                footer={[
                  registerButton,                  
                ]}
              />
            }
          </section>
        )
      }}
    />
  )
}

export default EventSchedule
