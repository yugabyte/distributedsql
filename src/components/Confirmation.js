import React, { useEffect, useState } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import SlackLogo from './Slack';

const CLIENT_ID = '201773289674-7i9djb4f0n9i4mordfol8gjm01efgsul.apps.googleusercontent.com';
const API_KEY = 'AIzaSyC7UmWjMil-0CWmEX8-43lruJsjjUc3clk';
// Array of API discovery doc URLs for APIs used
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = "https://www.googleapis.com/auth/calendar.events";

const EVENT_OBJ = {
  'summary': 'Distributed SQL Virtual Summit 2020',
  'location': 'Virtual Conference',
  'description': 'Join us for the second annual Distributed SQL Summit, the event that brings together thought leaders, database builders, and application developers to discuss how to leverage distributed SQL systems to build applications and services in the cloud. https://distributedsql.org/',
  'start': {
    'dateTime': '2020-09-15T10:00:00-07:00',
    'timeZone': 'America/Los_Angeles'
  },
  'end': {
    'dateTime': '2020-09-15T14:00:00-07:00',
    'timeZone': 'America/Los_Angeles'
  },
  'recurrence': [
    "RRULE:FREQ=DAILY;UNTIL=20200917T170000Z",
  ],
  'reminders': {
    'useDefault': false,
    'overrides': [
      {'method': 'email', 'minutes': 24 * 60},
      {'method': 'popup', 'minutes': 10}
    ]
  }
};

const Confirmation = (props) => {
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
    let script = document.createElement('script');
    script.src = 'https://apis.google.com/js/api.js';

    script.onload = () => {
      window.gapi.load('client:auth2', initClient);
    }
    script.async = true;
    document.body.appendChild(script);
  }, [])

  return (
    <StaticQuery query={graphql`
      query {
        formPage: file(relativePath: { eq: "Node-Lines_Dist-Summit-Form.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 700) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={(data) => {
      const background = data.formPage.childImageSharp.fluid;
      return (
        <BackgroundImage Tag="div" fluid={background} id="register-form">
          <div className="inner">
            <aside className="register--aside confirmation">
                <div className="thank-you-note">Thank you for registering!</div>
                <h2>Check your email for confirmation.</h2>            
                <div className="event" onClick={handleCalendarClick}>
                  <div className="event-details">
                    {!eventAdded &&
                      <small>Event - Sept 15 - 17 | 10am - 2pm PT</small>
                    }
                    <div className="event-title">{eventAdded ?
                      'Event has been added to your calendar!' :
                      'Distributed SQL Virtual Summit 2020'
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
                        <li><a rel="noopener noreferrer" href="https://www.yugabyte.com/slack" className="icon alt"><SlackLogo styles={{width: '27px', height: '27px', marginTop: '12px'}} /></a></li>
                        <li><a rel="noopener noreferrer" href="https://twitter.com/yugabyte" className="icon alt"><i className="fa fa-twitter"></i></a></li>
                        <li><a rel="noopener noreferrer" href="https://www.linkedin.com/company/yugabyte/" className="icon alt"><i className="fa fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </aside>
          </div>
        </BackgroundImage>
      );
    }}
  />
  );
}

export default Confirmation
