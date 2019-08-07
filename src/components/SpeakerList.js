import React from 'react'
import Speaker from './Speaker'

const speakerData = require('../data/data.json')
const SpeakerList = (props) => {
  var speakers = []
  try {
    if (props.isAgenda) {
      speakerData.sort((a, b) => a.timeSlot - b.timeSlot);
    }

    speakerData.forEach(speaker => {
      // skip if has mergeWith attribute
      if(speaker.mergeWith) return
      var speakerPicture = null
      try {
        speaker.mergers = speakerData.filter((s)=>s.mergeWith===speaker.speakerId)
        speakerPicture = props.data[speaker.speakerPicture].childImageSharp.fluid
        if(speaker.mergers){
          speaker.mergers.map((merger) => {
            merger.speakerPicture = props.data[merger.speakerPicture].childImageSharp.fluid
            return null;
          });
        }
      } catch (error) {

      }

      speakers.push(
        <Speaker
        key={speaker.speakerId + speaker.timeSlot}
        speaker={{
          ...speaker,
          isAgenda: props.isAgenda,
          speakerPicture,
        }} />
      )

    });
  } catch (error) {
    console.error(error)
  }

  return(
    <div>
    <section id="dayone" className={'spotlights agenda'}>
        {speakers}
      </section>
      </div>
)
      }
export default SpeakerList
