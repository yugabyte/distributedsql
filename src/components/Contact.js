import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section id="contact-us">
                <h3>Contact us</h3>
                <form name="contact" method="POST" action="/thank-you" data-netlify="true" netlify-honeypot="bot-field">
                    <div className="hidden">
                        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                    </div>
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>                    
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="mailto:info@yugabyte.com">info@yugabyte.com</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-twitter"></span>
                        <h3>Twitter</h3>
                        <a href="https://twitter.com/yugabyte">@yugabyte</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Venue</h3>
                        <span>Hilton San Jose<br />
                        300 Almaden Boulevard <br/>
                        San Jose, California 95110 <br/>
                        United States</span>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
