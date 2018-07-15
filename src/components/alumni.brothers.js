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
        // console.log(row)
        if (i !== 0) {
          return (
            <div id="brothers-contact" className="contact-container" key={`${row}_${i}`} >
              <div className="address-flex">
                {/* Contact Year and Name */}
                <div className="name-card">
                  <h3>
                    <span className="span-name">{name}</span>
                    <span className="span-year">'{year}</span>
                  </h3>
                  <h5>"{nickname}"</h5>
                </div>
                {/* Contact Info */}
                <div className="contact-info">
                  <p className="street">{street_address}</p>
                  <p className="location">{town}{`${town ? ',' : ''}`} {state} {zip}</p>
                  <p className="phone">{phone}</p>
                  {rip ? <RIP /> : null}
                </div>
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

