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
  { value: 'sept-15', label: 'Sept 15' },
  { value: 'sept-16', label: 'Sept 16' },
  { value: 'sept-17', label: 'Sept 17' }
];

const EventSchedule = (props) => {
  const [showModal, setShowModal] = useState(false)
  const [eventInfo, setEventInfo] = useState({})

  const handleShowInfo = (e, event) => {
    setEventInfo(event);
    setShowModal(true);
    navigate(`/schedule?event=${event.id}`)
    if (e) {
      e.preventDefault()
    }
  }

  const eventId = useQueryParam("event", null);
  if (eventInfo.id !== eventId) {
    const selectedEvent = conferenceSchedule.flat().find(x => x.id === eventId);
    if (selectedEvent) {
      handleShowInfo(null, selectedEvent);
    }
  }

  return (
    <StaticQuery query={graphql`
      query {
        AlanCaldera1: file(relativePath: { eq: "AlanCaldera.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        AllisonKunz1: file(relativePath: { eq: "AllisonKunz.png" }) {
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
        BreneshStanslasFlowerMary1: file(relativePath: { eq: "BreneshStanslasFlowerMary.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        ChristophPakulski1: file(relativePath: { eq: "ChristophPakulski.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        DaShaunCarter1: file(relativePath: { eq: "DaShaunCarter.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        EthanUberseder1: file(relativePath: { eq: "EthanUberseder.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        EvanPowell1: file(relativePath: { eq: "EvanPowell.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        HaleDonertasli1: file(relativePath: { eq: "HaleDonertasli.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        HudsonClark1: file(relativePath: { eq: "HudsonClark.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        JamesHartig1: file(relativePath: { eq: "JamesHartig.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        JoeBeda1: file(relativePath: { eq: "JoeBeda.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        JoeHellerstein1: file(relativePath: { eq: "JoeHellerstein.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        KartikRallapalli1: file(relativePath: { eq: "KartikRallapalli.jpeg" }) {
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
        KenOwens1: file(relativePath: { eq: "KenOwens.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        LianghongXu1: file(relativePath: { eq: "LianghongXu.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        MaheshTyagarajan1: file(relativePath: { eq: "MaheshTyagarajan.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        MehrdadNurolahzade1: file(relativePath: { eq: "MehrdadNurolahzade.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        MikeDenman1: file(relativePath: { eq: "MikeDenman.png" }) {
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
        JamesTaylor1: file(relativePath: { eq: "JamesTaylor.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        PrasadRadhakrishnan1: file(relativePath: { eq: "PrasadRadhakrishnan.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        PuneetDevadiga1: file(relativePath: { eq: "PuneetDevadiga.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        TravisLogan1: file(relativePath: { eq: "TravisLogan.jpeg" }) {
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
        TylerRamer1: file(relativePath: { eq: "TylerRamer.png" }) {
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
                <h4>Distributed SQL Summit Schedule <span>•</span> Virtual Event</h4>
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
                    <div id="sept-15" className="calendar-date">
                      <div>Sept</div>
                      <strong>15</strong>                  
                    </div>
                    <div className="event-name">
                      Workshop Day<br />
                      10 am to 3 pm PT
                    </div>
                  </div>
                  <div className="card-list">
                    {conferenceSchedule[0].map(event => (
                      <div className="event-card">
                        <div className="event-time">{event.time}</div>
                        <Link to={`/session/${event.id}`}>
                          <h4 className="talk-title">{event.talk}</h4>
                        </Link>
                        {event.speakers && event.speakers.map(speakerKey => (
                          <Speaker
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
                    <div id="sept-16" className="calendar-date">
                      <div>Sept</div>
                      <strong>16</strong>                  
                    </div>
                    <div className="event-name">
                      Summit Day 1<br />
                      10 am to 3 pm PT
                    </div>
                  </div>
                  <div className="card-list">
                    {conferenceSchedule[1].map(event => (
                      <div className="event-card">
                        <div className="event-time">{event.time}</div>
                        <Link to={`/session/${event.id}`}>
                          <h4 className="talk-title">{event.talk}</h4>
                        </Link>
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
                    <div id="sept-17" className="calendar-date">
                      <div>Sept</div>
                      <strong>17</strong>                  
                    </div>
                    <div className="event-name">
                      Summit Day 2<br />
                      10 am to 3 pm PT
                    </div>
                  </div>
                  <div className="card-list">
                    {conferenceSchedule[2].map(event => (
                      <div className="event-card">
                        <div className="event-time">{event.time}</div>
                        <Link to={`/session/${event.id}`}>
                          <h4 className="talk-title">{event.talk}</h4>
                        </Link>
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
                  navigate('/schedule')
                }}
              />
            }
          </section>
        )
      }}
    />
  )
}

export default EventSchedule
