import React from 'react';

// Components
import RIP from '../components/rip'
import EmailComponent from '../components/email'
// Styles
import '../scss/alumni.scss'

const AlumniComm = ({ rows }) => {
  return (
    <div>
      {rows.map((row, i) => {

        const { position, name, email } = row;
        // console.log(position)
        const rowData = Object.values(row);
        const rip = rowData[3] ? <RIP /> : null;
        const contactEmail = email ? <EmailComponent email={email} /> : null;

        if (i !== 0) {
          return (
            <div className="contact-container" key={`${row}_${i}`} >
              {/* Contact Position */}
              <h4>{position}</h4>
              <div className="name-email">
                {/* Contact Name */}
                <h5><em>{name}</em></h5>
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

export default AlumniComm

