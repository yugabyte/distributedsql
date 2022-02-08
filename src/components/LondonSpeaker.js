import React from 'react';

const LondonSpeaker = (props) => {
  return (
    <div className={props.size ? `speaker ${props.size}` : "speaker"}>
      <div className={props.orientation === 'landscape' ? "profile horizontal" : "profile"} key={props.speakerId} id={props.speakerId}>
        <div className="speakerImage">
          <img src={`/static/${props.speakerPicture}.png`} alt={`${props.speakerName} picture`} style={{ border: `3px solid ${props.borderColor}` }} />
        </div>
        <div className="speakerProfile">
          <div className="profileWrapper">
            <div className="profileName">
              {props.speakerName}
            </div>
          </div>
          <div className="profileBio">
            {props.speakerPosition},<br />
            <span className="company">{props.speakerCompany}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LondonSpeaker;
