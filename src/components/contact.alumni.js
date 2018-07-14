import React from 'react';

// Components
import RIP from '../components/rip'
// Styles
import '../scss/contact.alumni.scss'
// Icons
import emailIcon from '../icons/zondicons/envelope.svg'

const EmailComponent = ({ email }) => (
  // "mailto:" may not be the desired end result
  <a href={`mailto:${email}`}>{email}
    <img
      src={emailIcon}
      alt="email icon with link"
      style={{
        width: '1.3em',
        height: '1.3em',
        padding: 0,
        margin: '0 1em',
      }}
    />
  </a>
)

const ContactAlumni = ({ rows }) => {
  return (
    <div>
      {rows.map((row, i) => {
        const rowData = Object.values(row);
        console.log(row.Name)
        const rip = rowData[3] ? <RIP /> : null;
        const contactEmail = rowData[2] ? <EmailComponent email={rowData[2]} /> : null;
        if (i !== 0) {
          return (
            <div className="contact-container" key={`${row}_${i}`} >
              {/* Contact Position */}
              <h4>{rowData[1]}</h4>
              <div className="name-email">
                {/* Contact Name */}
                <h5><em>{rowData[0]}</em></h5>
                {/* Contact Email */}
                {contactEmail || rip}
              </div>
              <hr />
            </div>
          )
        }
      })}
    </div>
  )
}

export default ContactAlumni
