import React from 'react'
import Img from "gatsby-image"

class Speaker extends React.Component {
    state = {
      showTalkDetail: false,
      showSpeakerDetail: false
    };
    render() {
        const speakerProps = this.props.speaker;
        const speakerLink = ['Break', 'Lunch'].includes(speakerProps.speakerName) ?
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
                          <a href={speakerLink}>
                            <Img fluid={speakerProps.speakerPicture}
                            key={speakerProps.speakerId}
                            alt={speakerProps.speakerName} />
                          </a>
                        :
                        <span className="placeholder"/>
                    }
                     {
                        speakerProps.mergers ?
                        speakerProps.mergers.map((speaker, idx) => {
                          return (
                            <a key={`link-${speaker.speakerId}`}
                               href={`/speaker/${speaker.speakerId}`}>
                              <Img style={{
                                  top:'0',
                                  left: (65 * (idx + 1)) + 'px',
                                  position:'absolute'
                              }} fluid={speaker.speakerPicture}
                                key={speaker.speakerId}
                                alt={speaker.speakerName} />
                            </a>)
                        })

                        :
                        null

                    }
                </div>
                    <header className="major">
                        <h5>
                          { speakerProps.speakerName &&
                            <span key={speakerProps.speakerId}><b>{speakerProps.speakerName}</b>, {speakerProps.speakerPosition}, {speakerProps.speakerCompany}</span>
                          }
                          {
                            speakerProps.mergers.map((speaker) => {
                              return (<span key={speaker.speakerId}><br /><b>{speaker.speakerName}</b>, {speaker.speakerPosition}, {speaker.speakerCompany}</span>);
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
