import React from 'react';

const LondonSpeaker = (props) => {
  return (
    <div className="speakers-box">
      <div className="head">
        <img src={require(`../../assets/images/dayLondon/speakers/${props.picture}`).default} alt={props.name} title={props.name} />
      </div>
      <div className="author-name">
        <b>{props.name}</b>
        {props.position &&
          <span>
            {props.position}, <br />
          </span>
        }
        <b>{props.company}</b>
      </div>
    </div>
  );
};

export default LondonSpeaker;
