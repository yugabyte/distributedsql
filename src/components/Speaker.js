import React from 'react';

const Speaker = ({
  borderColor = '#000041',
  speakerPosition,
  size,
  orientation = 'portrait',
  speakerId,
  speakerImage,
  speakerName,
  speakerCompany
}) => {
  return (
    <div className={size ? `speaker ${size}` : "speaker"}>
      <div className={orientation === 'landscape' ? "profile horizontal" : "profile"} key={speakerId} id={speakerId}>
        <div className="speakerImage">
          <img src={speakerImage} alt="profile" style={{ border: `3px solid ${borderColor}` }} />
        </div>
        <div className="speakerProfile">
          <div className="profileWrapper">
            <div className="profileName">
              {speakerName}
            </div>
          </div>
          <div className="profileBio">
            {speakerPosition},<br />
            <span className="company">{speakerCompany}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speaker;
