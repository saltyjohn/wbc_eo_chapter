import React from 'react';

// Components
import RIP from '../components/rip'

// Styles
import '../scss/alumni.scss'

const AlumniBrothers = ({ rows }) => {
  return (
    <div>
      {rows.map((row, i) => {
        const { name, year, nickname, street_address, town, state, zip, phone, rip } = row;
        console.log(row)
        if (i !== 0) {
          return (
            <div className="contact-container" key={`${row}_${i}`} >
              {/* Contact Year and Name */}
              <div className="name-card">
                <h3><span>'{year}</span>{name}</h3>
                <h5>"{nickname}"</h5>
              </div>
              <div className="name-contact">
                {/* Contact Info */}
                <p className="street">{street_address}</p>
                <p className="location">{town}, {state} {zip}</p>
                <p className="phone">{phone}</p>
              </div>
              <hr />
            </div>
          )
        }
      })}
    </div>
  )
}

export default AlumniBrothers

