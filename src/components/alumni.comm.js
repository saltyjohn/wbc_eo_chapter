import React from 'react';

// Components
import RIP from '../components/rip'
import EmailComponent from '../components/email'
// Styles
import '../scss/contact.alumni.scss'

const AlumniComm
  = ({ rows }) => {
    return (
      <div>
        {rows.map((row, i) => {

          const rowData = Object.values(row);
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

export default AlumniComm

