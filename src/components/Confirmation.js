import React, { useEffect, useState } from 'react'
import SlackLogo from '../assets/images/svg/slack.svg'

export const CLIENT_ID = '201773289674-7i9djb4f0n9i4mordfol8gjm01efgsul.apps.googleusercontent.com';
export const API_KEY = 'AIzaSyC7UmWjMil-0CWmEX8-43lruJsjjUc3clk';
// Array of API discovery doc URLs for APIs used
export const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
export const SCOPES = "https://www.googleapis.com/auth/calendar.events";

const EVENT_OBJ = {
  'summary': 'Distributed SQL Summit Asia',
  'location': 'Virtual Conference',
  'description': 'Join us for Distributed SQL Summit Asia, the event that brings together thought leaders, database builders, and application developers to discuss how to leverage distributed SQL systems to build applications and services in the cloud. https://asia.distributedsql.org/',
  'start': {
    'dateTime': '2021-01-20T10:00:00+05:30',
    'timeZone': 'Asia/Kolkata'
  },
  'end': {
    'dateTime': '2021-01-20T15:00:00+05:30',
    'timeZone': 'Asia/Kolkata'
  },
  'recurrence': [
    "RRULE:FREQ=DAILY;UNTIL=20210122T093000Z",
  ],
  'reminders': {
    'useDefault': false,
    'overrides': [
      {'method': 'email', 'minutes': 24 * 60},
      {'method': 'popup', 'minutes': 10}
    ]
  }
};

const Confirmation = () => {
  const [eventAdded, setEventAdded] = useState(false);
  const handleCalendarClick = (event) => {
    const result = window.gapi.auth2.getAuthInstance().signIn();
    result.then(() => {
      updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
    });
  }  

  const addToCalendar = () => {
    var request = window.gapi.client.calendar.events.insert({
      'calendarId': 'primary',
      'resource': EVENT_OBJ
    });
    request.execute((event) => {
      console.log('Event created: ' + event.htmlLink);
    });
  }

  const updateSigninStatus = (isSignedIn) => {
    if (isSignedIn) {
      addToCalendar();
      setEventAdded(true);
    }
  }

  const initClient = () => {
    window.gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES
    }).then(() => {
      // Listen for sign-in state changes.
      window.gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

      // updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
    }, function(error) {
      console.error(JSON.stringify(error, null, 2));
    });
  }

  useEffect(() => {
    if (!window.gapi) {
      let script = document.createElement('script');
      script.src = 'https://apis.google.com/js/api.js';

      script.onload = () => {
        window.gapi.load('client:auth2', initClient);
      }
      script.async = true;
      document.body.appendChild(script);
    }
  }, [])

  return (
    <div id="register-form">
      <div className="inner">
        <aside className="register--aside confirmation">
            <div className="thank-you-note">Thank you for registering!</div>
            <h2>Check your email for confirmation.</h2>            
            <div className="event" onClick={handleCalendarClick}>
              <div className="event-details">
                {!eventAdded &&
                  <small>Event - Jan 20 - 22 | 10am - 3pm IST</small>
                }
                <div className="event-title">{eventAdded ?
                  'Event has been added to your calendar!' :
                  'Distributed SQL Summit Asia'
                }</div>
              </div>
              <div className="calendar-icon">
                {eventAdded ?
                  <i className="fa fa-check"></i> :
                  <i className="fa fa-calendar"></i>
                }
              </div>
            </div>
            <div className="reminder">Time to mark your calendar and tell your friends about it!</div>
            <div className="social-media">
                <ul className="actions">
                    <li><a rel="noopener noreferrer" href="https://github.com/yugabyte/yugabyte-db" className="icon alt"><i className="fa fa-github"></i></a></li>
                    <li><a rel="noopener noreferrer" href="https://www.yugabyte.com/slack" className="icon alt"><SlackLogo style={{width: '27px', height: '27px', marginTop: '12px', fill: '#FFFFFF'}} /></a></li>
                    <li><a rel="noopener noreferrer" href="https://twitter.com/yugabyte" className="icon alt"><i className="fa fa-twitter"></i></a></li>
                    <li><a rel="noopener noreferrer" href="https://www.linkedin.com/company/yugabyte/" className="icon alt"><i className="fa fa-linkedin"></i></a></li>
                </ul>
            </div>
        </aside>
      </div>
    </div>
  );
}

export default Confirmation
