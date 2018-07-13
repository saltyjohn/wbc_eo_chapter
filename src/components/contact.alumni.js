import React from 'react';
import Link from 'gatsby-link';

import RIP from '../components/rip'

import '../scss/contact.alumni.scss'

const ContactAlumni = ({ rows }) => {
  return (
    <div>
      {rows.map((row, i) => {
        const rowData = Object.values(row);
        const rip = rowData[3] ? <RIP /> : null;
        const contactEmail = rowData[2] ? <p>{rowData[2]}</p> : null;
        if (i !== 0) {
          // TODO: RIP logic &|| styling goes here
          return (
            <div className="contact-container" key={`${row}_${i}`} >
              {/* Contact Position */}
              <div className="position">
                <h4>{rowData[1]}</h4>
                <div></div>
              </div>
              <div className="name-email">
                {/* Contact Name */}
                <h5>{rowData[0]}</h5>
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
