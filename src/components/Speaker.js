import React from 'react'
import { Link } from 'gatsby'
import Img from "gatsby-image"

class Speaker extends React.Component {
    state = {
      showTalkDetail: false,
      showSpeakerDetail: false
    };
    render() {
        const speakerProps = this.props.speaker;
        const speakerLink = ['Break', 'Lunch', 'Meetup'].includes(speakerProps.speakerName) ?
          null: `/speaker/${speakerProps.speakerId}`;
        return(
            <section
            ref={speakerProps.speakerId}
            id={speakerProps.speakerId}
            className={'agendaItem'}>
                    <span className="speakerSlot">
                        <div className="pinkCircleSmall">
                        </div>
                        {speakerProps.time}
                    </span>
            <div className={"content"}>
                <div className="inner">
                <h2 className="talkTitle">
                  {speakerProps.talkTitle}
                </h2>
                <div key={speakerProps.speakerId}
                  className="newImage" style={{
                    position:'relative'
                }}>
                    {
                        speakerProps.speakerPicture ?
                          <Link href={speakerLink}>
                            <Img fluid={speakerProps.speakerPicture}
                            key={speakerProps.speakerId}
                            alt={speakerProps.speakerName} />
                          </Link>
                        :
                        <span className="placeholder"/>
                    }
                     {
                        speakerProps.mergers ?
                        speakerProps.mergers.map((speaker, idx) => {
                          return (
                            <Link key={`link-${speaker.speakerId}`}
                               to={`/speaker/${speaker.speakerId}`}>
                              <Img style={{
                                  top:'0',
                                  left: (65 * (idx + 1)) + 'px',
                                  position:'absolute'
                              }} fluid={speaker.speakerPicture}
                                key={speaker.speakerId}
                                alt={speaker.speakerName} />
                            </Link>)
                        })

                        :
                        null

                    }
                </div>
                    <header className="major">
                        <h5>
                          { speakerProps.speakerName && speakerLink &&
                            <span key={speakerProps.speakerId}><b><Link to={`/speaker/${speakerProps.speakerId}`}>{speakerProps.speakerName}</Link></b>, {speakerProps.speakerPosition}, {speakerProps.speakerCompany}</span>
                          }
                          {
                            speakerProps.mergers.map((speaker) => {
                              return (<span key={speaker.speakerId}><br /><b><Link to={`/speaker/${speaker.speakerId}`}>{speaker.speakerName}</Link></b>, {speaker.speakerPosition}, {speaker.speakerCompany}</span>);
                            })
                          }
                        </h5>
                    </header>
                    {speakerProps.isAgenda &&
                      <div>
                        <p className="talkAbstract" dangerouslySetInnerHTML={{__html: speakerProps.talkAbstract }} />
                      </div>
                    }
                </div>
            </div>
        </section>
        )
    }
}
export default Speaker
