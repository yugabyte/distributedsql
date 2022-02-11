import React from 'react';

const LondonAgenda = (props) => {
  return (
    <div className="agenda-row">
      <div className="col col-1 col-start">
        {props.start}
      </div>
      <div className="col col-2 col-speaker" dangerouslySetInnerHTML={{ __html: props.speaker }}>
      </div>
      <div className="col col-3 col-session" dangerouslySetInnerHTML={{ __html: props.session }}
      ></div>
      <div className="col col-4 col-info">
        {props.message &&
          <div className="message-box">
            <span className="info">i</span>
            <div className="message" dangerouslySetInnerHTML={{ __html: props.message }}>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default LondonAgenda;
